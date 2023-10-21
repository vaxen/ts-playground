export class EUSocket {
    public gainEuEnergy(): void {
        console.log('Getting  eu energy...');
    }
}

export class Socket {
    public gainEnergy(): void {
        console.log('Getting energy...');
    }
}

export class SocketAdapter extends Socket {
    private euSocket : EUSocket;

    constructor(euSocket: EUSocket){
        super();
        this.euSocket = euSocket;
    }
    public gainEnergy(): void {
        this.euSocket.gainEuEnergy();
    }

}

//DEMO
const euSocket = new EUSocket();
const socketAdapter = new SocketAdapter(euSocket);

socketAdapter.gainEnergy();

