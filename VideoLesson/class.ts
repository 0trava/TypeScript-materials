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
