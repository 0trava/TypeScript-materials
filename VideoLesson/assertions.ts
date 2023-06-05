const inputElement = document.querySelector('input')
const value1 = (inputElement as HTMLInputElement).value
const value2 = (<HTMLInputElement>inputElement).value


const getLendght = (text: string | null) => {
    return text!.length
    //  ! - Не null и не underfind
}

getLendght('wegwr')
getLendght(null)

