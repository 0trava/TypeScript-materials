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

// function getCar(name:string): string
// function getCar(name: string, price?: number): string

function getCar(name: string, price?: number): string {
    return price ? `Название ${name}, Цена ${price}` : `Название ${name}` 
}


const car1 = getCar('bmw')
const car2 = getCar('bmw', 1000)
// const car3 = getCar('bmw', 1000, null) - так не працює