const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//with tuple I force the order of datatype in the array
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 60];