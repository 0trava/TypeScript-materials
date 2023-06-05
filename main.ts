interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

const user: IUser = {
    email: '8546548488@list.ru',
    name: 'Max',
    age: 21
}