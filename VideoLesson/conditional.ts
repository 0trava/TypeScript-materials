type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number> //yes
type Type2 = TypeIsNumber<string> //no


// --------------------------- Literal

type TypeBrand ='bmw' | 'mercedes' | 'mclaner'
type TypePrice = '100$' | '5000$' | '80000$'

type TypeCar = `${TypeBrand}  ${TypePrice}`

const carPrice1:TypeCar = 'bmw  5000$'
const carPrice2:TypeCar = 'mclaner  80000$'




