class User {
    constructor(status: boolean) {
        this.status = status;
    }

    private name: string
    private age: number
    private city: string
    status: boolean

    setName(name): void {
            this.name = name
    }

    getName(): string {
        return 'hello my name is ' + this.name;
    }

    setAge(age): void {
        if (age > 0) {
            this.age = age
        }
    }

    getAge(): string {
        return `hello my age is` + this.age;
    }

    setCity(city): void {
            this.city = city;
    }

    getCity(): string {
        return 'hello I from' + this.city
    }

    changeStatus(status): void {
        this.status = !this.status
    }
}

interface Animal {
    move: string
    say: string
    infoAnimal ?: () => string;

}


let fish: Animal = {move: 'swim', say: 'hz'}


class Cat implements Animal {
    name: string
    age: number
    move: string;
    say: string;

    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }
    infoAnimal(): string {
        return `I'm ${this.name} and i ${this.age} years old ,moreover i can ${this.move} and i say ${this.say} `
    }
}

class Dog implements Animal {
    name: string
    age: number
    move: string;
    say: string;

    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }
    infoAnimal(): string {
        return `I'm ${this.name} and i ${this.age} years old ,moreover i can ${this.move} and i say ${this.say} `
    }
}

class Fish implements Animal {
    constructor(name: string, age: number, move: string, say: string) {
        this.name = name;
        this.age = age;
        this.move = move;
        this.say = say;
    }

    name: string
    age: number
    move: string;
    say: string;
    infoAnimal(): string {
        return `I'm ${this.name} and i ${this.age} years old ,moreover i can ${this.move} and i say ${this.say} `
    }
}

let cat = new Cat('barsik',3,'walking','myo')
cat.infoAnimal()

let dog = new Dog('tomy',4,'running','gav')
dog.infoAnimal()