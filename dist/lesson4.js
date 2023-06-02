// Практика
// Давайте побудуємо будинок.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.random();
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person inside');
        }
        else {
            console.log("Door is close");
        }
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() === this.key.getSignature()) {
            return this.door = true;
        }
        console.log("This key not for this door");
    };
    return MyHouse;
}(House));
var key = new Key();
var house = new MyHouse(key);
var person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
