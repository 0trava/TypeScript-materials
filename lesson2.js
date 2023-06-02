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
// Вкажіть типи для наступних функцій
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
    console.log('Сторінка завантажена');
}
// Зробіть змінну, яка може приймати або рядок, або число.
var let1;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
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
