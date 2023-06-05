
interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'> {} // Omit - вирізаємо вказаний елемент 
interface ICarId extends Pick<ICar, 'id'> {} // Pick - беремо тільки вказаний елемнт

type TypeCarRecord = Record<'name' | 'price', string | number > // Record - назначає типи для змінних, 

interface IOptionalCar extends Partial<ICar> {} // Partial - робить всі поля не обов'язковими
interface IReadonlyCar extends Readonly<ICar> {} // Readonly - тільки для перегляду
interface IRequiredCar extends Required<ICar> {} // Required - робить всі поля обов'язковими

type TypeGetType = () => string
type Return = ReturnType<TypeGetType> // ReturnType - поветає тип змінної

type Any = Extract<'max' | 'andrey', 'andrey' | 'misha'> // Extract - поветає тільки те, що повторюється - andrey


const car: ICarId ={
    id: 300
}

