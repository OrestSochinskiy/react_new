class USER {
    name: string;
    age: number;
    status: boolean;


    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(): string {
        return 'hello my name is ' + this.name;
    }
}
interface Car {
    model: string;
    power: number;
    volume?: number;
    drive?: (speed: number) => void
}

function Test(
    str: string,
    num: number,
    bool: boolean,
    arr: [],
    arrAny: any[],
    arrNum: number[],
    arrStr: string[],
    obj: {},
    objCar: { model: string, power: number },
    objICar: Car,
    carsArr: Car[],
    objICar3: Car,
    user: USER
): void {
}



Test(
    'asdasd',
    10500,
    true,
    [],
    [1, 2, 3, true, 'afdhagd', []],
    [1, 2],
    ['asd'],
    {
        name: 'vasya', age: 31, greeting: function () {
        }
    },
    {model: 'ashdahsd', power: 123},
    {model: 'ashdahsd', power: 123, drive: (x) => console.log(x)},
    [{model: 'ashdahsd', power: 123}, {model: 'ashdahsd', power: 123, volume: 123}],
    {
        model: 'adsa', power: 123, volume: 5.6, drive: (y) => {
            let number = y / 2 * 4;
        }
    },
    new USER('vasya', 31, true)
)


interface IRunnner {
    speed : number;
    avgSpeed : (time : number) => number;
}
let runner : IRunnner= {speed : 12 , avgSpeed : (time) => this.speed / time}

class Sportsmen {
    private name: string
   private age: number
    speed : 14
    avgSpeed(time : number) : number {
        return (this.speed + 2) / time
    }
    setAge(age){
        if (age > 0 ){
            this.age = age;
        }
    }
}


let sportsmen1 = new Sportsmen()
class Policmen implements IRunnner{
    rank: string
    status: boolean
    speed: number;
    avgSpeed(time: number): number {
        return this.speed * time;
    }
    constructor(rank: string, status: boolean, speed: number) {
        this.rank = rank;
        this.status = status;
        this.speed = speed;
    }

}
let sportsmen  = new Sportsmen()

let runners : IRunnner [] = [
    runner,
    sportsmen,
    new Policmen('general', true,2)
]

class Igeo {
    lat : string
    lng : string
}

interface IAddress {
    street : string
    suite : string
    city : string
    zipcode : string
    geo : Igeo
}

interface Icompany {
    name: string
    catchPhrase : string
    bs  : string
}

interface IUser {
    id : number
    name : string
    username : string
    email : string
    address : IAddress
    phone : string
    website : string
    company : Icompany

}

let jphUser: IUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232'
        }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models'
    }
}
