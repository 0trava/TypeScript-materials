function entity<T>(args: T): T{
    return args
}

entity<number>(1)
entity<string>('string')

// Якщо ми не знаємо який буде тип змінної прописуємо через дженерік. 
// Прийнто писати просто  загалвну букву. Повторюємо в трьох місцях.

const entity2 = <T>(args: T): T => {
    return args
}

entity2<number>(1)
entity2<string>('string')




class Channel<T> {
    private name: T

    constructor (name: T) {
        this.name = name
    }

    getName():T {
        return this.name
    }
}



new Channel<string>('RED Group')
new Channel<number>(1)


// -----------------------------------------------------------
interface IPair<K,V> {
    key: K
    value: V
}

const pair1:IPair<string, number> = {
    key: '1',
    value: 1,
}

const pair2:IPair<string, string> = {
    key: 'letter',
    value: 'boll',
}

// ------------------------------------------------------------

type TypeLenght = {
    lenght: number
}


function getNameLenght< T extends TypeLenght >(entity: T): number {
    return entity.lenght
}

// getNameLenght<string>('string'),
// getNameLenght<object>([0,1,2]),