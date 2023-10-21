interface Subject {
    attach(obs: Observer): void;
    detach(obs:Observer): void;
    notify(): void;
}

interface Observer {
    update(subject: Subject): void;
}

class ConcreteSubject implements Subject {
    private obs : Observer[];

    constructor(){
        this.obs = [];
    }

    attach(obs: Observer): void {
        if(this.obs.includes(obs)){
            throw new Error('Observer already attached');
        }
        this.obs.push(obs);   
    }

    detach(obs: Observer): void {
        if(!this.obs.includes(obs)){
            throw new Error('Observer not attached');
        }
        this.obs.splice(this.obs.indexOf(obs),1)
    }
    notify(): void {
        this.obs.forEach(obs => obs.update(this))
    }
}

class ConcreteObs1 implements Observer {
    update(subject: Subject): void {
        console.log('Doing some business logic with Obs1')
    }
}

class ConcreteObs2 implements Observer {
    update(subject: Subject): void {
        console.log('Doing some business logic with Obs2')
    }
}

//DEMO
const obs1 = new ConcreteObs1();
const obs2 = new ConcreteObs2();
const subject = new ConcreteSubject();

subject.attach(obs1);
subject.attach(obs2);
subject.notify();