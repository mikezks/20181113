const vorname: string = 'Daniel';
let alter: number = 34;

console.log(`${vorname} ist ${alter} Jahre alt.`);

const people: Array<string | number>  = [
    'Daniel-1.0',
    'Daniel-2.0',
    'Toby-1.0',
    'Peter',
    'Michael',
    'Markus',
    30
];

people.forEach(person => {
    let result: string;
    if (typeof person === 'string') {
        result = 'Name der Person: ' + person;
    } else {
        result = 'Das ist keine Person! :(';
    }
    console.log(result);
});


let person: {
    name: string,
    alter: number,
    groesse: number
} = {
    name: 'Peter Huber',
    alter: 30,
    groesse: 185
};

person.name = 'test';

console.log(person);

let tupel: [string, number] = ['Peter', 42];
tupel[0] = 'Heinz';
//tupel[0] = 45; // not assignable because number not string

enum meineNamen {
    'Peter',
    'Toby',
    'Alex'
}

console.log(meineNamen);

function calcNumbers(
    operation: string,
    value1: number,
    value2: number
): number {
    if (operation === 'add')
        return value1 + value2;
    return 0;
}

console.log(calcNumbers('add', 10, 5));

interface NameWithAge {
    vorname: string;
    nachname: string;
    alter: number;
}

const namesArr: NameWithAge[] = [
    {
        vorname: 'Heinz',
        nachname: 'Fischer',
        alter: 70
    },
    {
        vorname: 'Konrad',
        nachname: 'Müller',
        alter: 32
    },
    {
        vorname: 'Herbert',
        nachname: 'Bauer',
        alter: 12
    }
];

const getAlterByName = (name: string) => {
    const result = namesArr.filter(person =>
        person.nachname === name ||
        person.vorname === name);
    return result.length > 0 && result[0].alter;
};

console.log(getAlterByName('Heinz'));


