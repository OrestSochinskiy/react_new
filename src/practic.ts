class User {
    constructor(status: boolean) {
        this.status = status;
    }
    private name : string
    private age  : number
    private city : string
        status   : boolean
    setName(name){
        if (true){
            this.name = name
        }
    }
    getName(): string {
        return 'hello my name is ' + this.name;
    }
    setAge(age){
        if(age > 0){
            this.age = age
        }
    }
    getAge() : string{
        return `hello my age is` + this.age;
    }
    setCity(city) {
        if (true){
            this.city = city;
        }
    }
    getCity():string{
        return 'hello I from' + this.city
    }
    changeStatus(status) {
        if(status == true){
            this.status = false;
        }
        else{
            this.status = true;
        }
    }
}

interface Animal {
    move : string
    say  : string
}

function InfoAnimals (animal:Animal) {
    return `I can ${animal.move} and i say ${animal.say}`
}
let cat : Animal = {move : 'run' , say : 'myo'}
let dog : Animal = {move : 'walk' , say : 'gav'}
let fish : Animal = {move : 'swim' , say : 'hz'}

InfoAnimals(cat)

class Cat implements Animal{
    name : string
    age : number
    move: string;
    say: string;

    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }
}

class Dog implements Animal{
    name : string
    age : number
    move: string;
    say: string;

    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }
}

class Fish implements Animal{
    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }

    name : string
    age : number
    move: string;
    say: string;
}
