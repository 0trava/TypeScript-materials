type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number> 
type Type2 = TypeIsNumber<string>

