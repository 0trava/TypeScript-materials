// Практика
// Давайте побудуємо будинок.

// Створіть абстрактний клас House, в ньому повинна бути наступна логіка

// властивість door – вона може бути закрита, або відкрита.
// властивість key – об'єкт класу Key.
// конструктор приймає аргумент класу Key та зберігає його у властивість key.
// метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
// абстрактний метод openDoor приймає аргумент класу Key
// Створіть клас MyHouse, який реалізує клас House

// створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.
// Створіть об'єкт Key

// є тільки властивість signature
// під час створення об'єкта генерує випадкове число та зберігає його у signature
// метод getSignature повертає випадкове число з signature
// Створіть об'єкт Person

// конструктор приймає ключ класу Key і зберігає його у властивість key
// метод getKey повертає key

// Зробіть так, щоб мешканець потрапив додому. (OMG!)


class Key {
    private signature: number;

    constructor () {
        this.signature = Math.random();
      }

    getSignature (): number {
        return this.signature
    }
}


class Person {
    constructor (private key:Key) {}
    getKey (): Key {
        return this.key;
      }
}

abstract class House {
    protected door = false;
    private tenants: Person[] = [];
    constructor (protected key:Key) {}

    public comeIn (person: Person):void {
        if (this.door){
            this.tenants.push(person);
            console.log('Person inside');
        } else {
            console.log("Door is close")
        }

        
    }

    abstract openDoor (key:Key): boolean;

}



class MyHouse extends House {
    openDoor(key: Key): any {
        if (key.getSignature() === this.key.getSignature() ) {
            return this.door = true;
        }

        console.log("This key not for this door");
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

