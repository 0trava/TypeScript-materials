let age : number = 50;
let name1 : string = 'Max';
let toggle : boolean = true;
let empty : null = null;
let notInitialize : undefined = undefined;
let callback = (a: number ) => { return 100 + a };

let anything : any = -20;
anything = 'Text';
anything = {};

// Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

let some:string;
some = 'Text';

let str: string;

str = some;

// Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

let fixed: [string, number];

fixed = ['Max', 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).


// Вкажіть типи для наступних функцій

enum Load {LOADING, READY};

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.load === Load.READY) {
  console.log('Сторінка завантажена');
}

// Зробіть змінну, яка може приймати або рядок, або число.

let let1 : string | number;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let let2 : 'enable' | 'disable';


function showMessage(message: string) {
    console.log(message);
  }
  
  
  function calc(num1: number, num2: number) {
    return num1 + num2;
  }
  
  function customError() : never  {
    throw new Error('Error');
  }

//   Створіть свій тип даних на основі наявних даних.

type CustomType = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date;
        updateAt: Date;
    }
}

const page1 : CustomType = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2 : CustomType = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }