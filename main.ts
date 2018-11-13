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

let newPersonArr: NameWithAge[] = [
    ...namesArr.slice(1),
    {
        vorname: 'Sepp',
        nachname: 'Obermüller',
        alter: 67
    }
];

const nameProp = {
    vorname: 'Marie',
    nachname: 'Maier'
};

newPersonArr.push({
    ...nameProp,
    alter: 11
});

console.log(newPersonArr);

function showPeople(maxValues: number, ...args: string[]): void {
    if (args.length <= maxValues) {
        console.log(args);
    } else {
        console.log(`Bitte nicht mehr als ${maxValues} Namen übergeben.`);
    }
}

showPeople(3, 'Susi', 'Kerstin', 'Andi');

type MyMap = { [id: number]: string };

const valueMapWithIndex: MyMap = {};
valueMapWithIndex[19] = 'Mein neuer Wert';

console.log(valueMapWithIndex);

function logName(name: string = 'Maier') {
    console.log(name);
}

logName();
logName('Huber');

const [n1, n2, n3] = namesArr;
console.log(n1);
console.log(n2);
console.log(n3);

function defineVar() {
    const sepp: NameWithAge = {
        vorname: 'Sepp',
        nachname: 'Bender',
        alter: 12
    };
    console.log(sepp);
}

defineVar();
//console.log(sepp);

interface Flug {
    von?: string,
    nach?: string
}

interface Airport {
    airportName?: string
}

type FlugInfo = Flug & Airport;

const flugInfo: FlugInfo = {};
flugInfo.nach = 'Stuttgart';
flugInfo.von = 'Graz';
flugInfo.airportName = 'STR';

console.log(flugInfo);



abstract class AbsAirplane {
    static nrAirplanes: number = 0;
    private _seats?: number;
    vendor: string = 'Airbus';

    constructor(public type: string) {
        AbsAirplane.nrAirplanes++;
    }

    public get seats() {
        return this._seats || 0;
    }

    public set seats(nr: number) {
        this._seats = nr;
    }
}

interface Airline {
    airlineName: string;
}

class BoeingAirplane extends AbsAirplane implements Airline {
    vendor: string = 'Boeing';
    airlineName = 'LH';

    getNrOfBooking(): number {
        return 47;
    }
}

const myAirplane = new BoeingAirplane('777');

myAirplane.seats = 200;
console.log(myAirplane);

class Logger<T> {
    constructor(public result: T) {
    }

    logMsg(): void {
        console.log('Logger Result Test: ', this.result);
    }
}

let myLogger: Logger<string | number | MyFlug> = new Logger<number>(67);
myLogger.logMsg();
myLogger = new Logger<string>('mein Error Text');
myLogger.logMsg();

class MyFlug {
    static fluege: { delayed: boolean }[] = [];
    von: string = 'Graz';
    nach: string = '';

    constructor(public readonly delayed: boolean) {
        MyFlug.fluege.push({ delayed });
    }

    static getDelayed(): number {
        return MyFlug.fluege.filter(flug => flug.delayed).length;
    }

    getVon() {
        return this.von;
    }
}

const f1 = new MyFlug(true);
const f2 = new MyFlug(false);
const f3 = new MyFlug(true);
console.log(MyFlug.getDelayed());

console.log(f1.getVon());

//f1.delayed = true;

myLogger = new Logger<MyFlug>(f1);
myLogger.logMsg();

