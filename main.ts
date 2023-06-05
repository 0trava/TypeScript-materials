let array: string[];

const numbers:ReadonlyArray<number> = [0, 1, 2, 3] //  Не змінюємий елемент. Тільки перегляд


type typeArray = [number, string, null]
const newArrey: typeArray = [1, '3', null];

// ----------------------------------------
type TypeChannelReturn = {
    name: string
}
function getChannel(name: string):TypeChannelReturn  {
    return {name:'Hello world'}
}

type TypeChannelFunction = (name: string) => TypeChannelReturn

const getChannelName:TypeChannelFunction = (name) =>  {
    return {name:'Hello world'}
}

// ----------------------------------------

const getNumbers = (...numbers: number[] ) => {

}

// ---------------------------------------- Перегрузка

function getCar(name:string): string
function getCar(name: string, price: number): string

function getCar(name: string, price: number): string {
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}` 
}


const car1 = getCar('bmw')
const car2 = getCar('bmw', 1000)
// const car3 = getCar('bmw', 1000, null) - так не працює

// ----------------------------------------Класи

class Car {
    carName: string
    price: number


    constructor (carName:string, price:number) {
        this.carName = carName
        this.price = price
    }

    getInfo(): string {
        return `${this.carName} - ${this.price}`
    }
}


new Car('BMW', 1000).getInfo()

// ---------------------------------------- Интерфейсы

