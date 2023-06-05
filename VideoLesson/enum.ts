enum EnumRoles {
    ADMIN = 0, 
    GUEST = 1, 
    USER = 3,
}

const enum EnumColors {
    black, pink, green
}


interface IUserChake {
    role: EnumRoles
    color:EnumColors
}

const newUserChack: IUserChake = {
    role: EnumRoles.ADMIN,
    color:EnumColors.black
}


// ------------------------------------------

console.log(EnumRoles[EnumRoles.GUEST])