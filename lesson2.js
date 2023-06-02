var age = 50;
var name1 = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
var anything = -20;
anything = 'Text';
anything = {};
// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
var some;
some = 'Text';
var str;
str = some;
// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
var fixed;
fixed = ['Max', 21];
// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
// Зробіть змінну, яка може приймати або рядок, або число.
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
// Вкажіть типи для наступних функцій
var Role;
(function (Role) {
    Role[Role["LOADING"] = 0] = "LOADING";
    Role[Role["READY"] = 1] = "READY";
})(Role || (Role = {}));
;
var let1;
var let2;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
