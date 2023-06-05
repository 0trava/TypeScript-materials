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




