# TypeScript-materials

<h2> Встановлення та налаштування </h2>

**<p>$ npm install -g typescript </p>**
<p>І тепер одразу додамо маленький сервер</p>
<p>npm i --save-dev lite-server</p>
Перейдемо в package.json і додамо в блок scripts нове значення "start": "lite-server", у вас повинно вийти якось так:</p>
-----------------------------------------------------------------------------------------------------------
<p>Пісял створення кожного файлу app.ts</p>
<p>Скомпілюйте файл наступною командою</p>
<p>$ tsc app.ts</p>
<p>Виконаємо ініціалізацію.</p>
<p>$ npm init -y</p>

<p>Ця команда стежить за зміною файлу та компілює його при кожній зміні</p>
<p>$ tsc app.ts -w</p><p>tsc app.ts -watch</p>
<p>Якщо потрібно компілювати одразу декілька файлів то використовують команду</p>
<p>$ tsc --init</p>
<p>У нас в проекті з'явиться файл tsconfig.json з купою закоментованих налаштувань.</p>
<p>Якщо тепер ми просто виконаємо команду. То скомпілюються всі файли з розширенням tc.</p>
<p>$ tsc</p><p>$ tsc -w</p>
------------------------------------------------------------------------------------------------------</p>
<h2>Опис простих</h2>
Number</p>
String</p>
boolean</p>
null</p>
undefined</p>
<b>Array</b> - масив рядків. let arrString: string[];</p>
<b>Object</b> - Якщо тип object const obj: object = {};</p>

<h2> Типи, яких немає в js</h2>
<h3>Типи для змінних та аргументів</h3>

<b>Any</b> - Вказуючи цей тип, ми робимо змінну як у js, туди можна передати все, що завгодно. </p>
<b>Unknown</b> - а змістом це те саме, що й any, тільки коли ми будемо намагатися його зберегти в іншу змінну, ми отримаємо помилку.</p>
<b>Tuple</b> - Одним словом - це незмінний масив. </p>
Є нюанс, якщо ми додамо через push, то компілятор це пропустить, він не відстежує реальний вміст масиву.</p>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/08785415-2fbc-4669-82b8-a21f9b9f2bad)

Enum - Це навіть патерн, але він такий популярний, що в typeScript вирішили додати його як тип даних.</p>
За правилами гарного тону змінна, яка в enum, починається з великої літери.</p>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/fdfc537d-587a-45bd-9cd0-1312b6f08d3a)

<b>Union Type</b> - Це коли ми говоримо, що змінна або аргумент може містити кілька типів. Типи перелічуються через |</p>
<b>Literal Type</b> - Чимось схоже на Union Type, але тільки замість типів ми передаємо рядки.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/02a58ae9-c4fa-4de2-b080-72156fc59926)


<h3>Типи для методів та функцій</h3>

Return Typ - Ми можемо вказувати тип, який повернеться з функції.</p>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/244919a0-5f68-4446-a6ff-ace6d43da83a)

Void - Це коли функція нічого не повертає.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/db74626b-af96-47fb-b3c9-77c5fb04ef05)

Never - Це коли функція ніколи не закінчується та нічого не повертає. Наприклад, listen в express, оскільки підключення до сервера постійне, або якщо ми повертаємо throw, оскільки це помилка, можна сказати, що функція ніколи не закінчується.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/6882223d-55f2-40b0-8fba-a5a595739b9f)

Function Type - Ми можемо описати функцію як тип, це особливо актуально для callback або, коли ми просто прокидаємо функцію.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/38cca6bb-cc55-495c-88bb-ce0a3ff56004)
------------------------------------------------------------------------------------------------------------
<h2>Custom Types</h2>

Ми можемо створювати свої типи, це дуже спрощує розробку. Пам'ятаєте приклад, де ми описували об'єкт і там виходило багато тексту, і практично неможливо перевикористовувати.
Давайте опишемо свій тип і спростимо ту логіку.</p>
Тип створюється за допомогою команди type, ім'я типу задається з великої літери.</p>
Ми також можемо експортувати тип даних із файлу.</p>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/648ba88c-d884-4e09-ab20-97cf8addfe74)


![image](https://github.com/0trava/TypeScript-materials/assets/102797527/7b454600-89f2-416f-be9b-3b11da544f71)
--------------------------------------------------------------------------------------------------------------
<h3>Опціональні параметри та властивості</h3>
Як бачите, якщо ми вказали в інтерфейсі, що name опціональний, то і в класі теж вказуємо, що це опціональна властивість, інакше буде помилка.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/e35e35fe-6e09-4174-8496-d144bfb5aefb)

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/09319739-5bde-4ff7-882a-dde3f0503949)


-----------------------------------------------------------------------------------------------------------------
<h2>Інкапсуляція</h2>
Майже у всіх мовах, які підтримують ООП, є три модифікатори доступу.

public - це як всі властивості та методи в js, можна викликати будь-де
private - не можна викликати ззовні екземпляра, не наслідується
protected - не можна викликати ззовні екземпляра, але наслідується

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/4e0daaa5-561b-40ca-8875-5bd6f4fd7e75)

<h2>Наслідування</h2>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/6f7cbb95-d376-4f5b-93ce-75f4f53c1da7)

<h2>Поліморфізм</h2>
Тут у багатьох думка щодо цього терміну розділяється і кожен каже, що його думка правильна, для мене це коли клас переписує методи та властивості успадкованого класу. Але саме визначення

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/a98f168c-889d-4f5b-81b5-0f4c33e815ee)

<h2>Абстракція</h2>
Саме визначення мені ось нічого не каже, надто туманно. Розкажу краще, що мається на увазі. Це не пиляти все в один великий метод, а розділити на кілька методів, який виконує кожен своє завдання, і викликати їх усіх в одному методі.
superProcess - це абстракція над усіма цими процесами.</p>
Давайте приклад із життя, де ми бачимо реалізацію абстракції, візьмемо, наприклад, ліфт. Ви заходите в кабіну ліфта і натискаєте на кнопку поверху, і все, ліфт уже поїхав, ось кнопка поверху - це абстракція над усіма процесами ліфта, натискаючи на неї, вам не потрібно думати, що запускається мотор (і тим паче самому його запускати), що вгору-вниз їздять противаги та натягуються троси. Простіше кажучи, це зменшення складності компонентів програми за рахунок приховування від програміста, який використовує ці компоненти, непотрібних подробиць. Натиснув кнопку і поїхав.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/282b3eed-425d-48f9-aab2-8d607cdae444)

<h2>Readonly</h2>

Цей оператор дозволяє зробити властивість як const, можна тільки читати, але не можна модифікувати.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/a4c326f3-5c78-4a05-8328-cf499520c1c7)

<h2>Getter/Setter</h2>
У низькорівневіших мовах це має дуже велике значення, там все збереження відбувається через сеттери та гетери, але в JS - це більше фішка, ніж необхідність.

<h2>Статичні методи та властивості</h2>
Щоб створити властивість або метод статичним, просто після модифікатора вказуємо static.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/91f7a197-ef61-47ba-80e7-7d47cb0abbeb)


------------------------------------------------------------------------------------------------------------------------------------------
<h2>Принципи ООП (S.O.L.I.D)</h2>

1. SPR (Single responsibility principle) - Принцип єдиного обов'язку
Принцип означає, що кожен об'єкт повинен мати один обов'язок і цей обов'язок повинен бути повністю інкапсульований у клас. Якщо клас працює з базою даних, він працює тільки з базою даних, якщо клас працює із зображеннями, він не працює з текстом і так далі.

2. OCP (Open/closed principle) - Принцип відкритості/закритості
Класи, методи, функції мають бути відкриті для розширення, але закриті для зміни.

Ну це і так зрозуміло, якщо ваш метод залежить від інших методів, то зміна будь-якого з них спрацює як доміно, впав один - впали всі. А ось додати новий функціонал нескладно. Ну знову ж таки, в реальності йому не слідувати, якщо щось працює неправильно, просто намагаємося так не робити, писати хороший код, який не потрібно буде змінювати, а тільки розширювати.

3. LSP (Liskov substitution principle) - Принцип підстановки Барбари Лісков
Методи, які використовують певний тип, повинні мати можливість використовувати його підтипи, не знаючи про це.

4. ISP (Interface segregation principle) - Принцип поділу інтерфейсу
Клієнти не повинні залежати від методів, які вони не використовують.

Принцип поділу інтерфейсів говорить про те, що занадто товсті інтерфейси необхідно розділяти на менші та специфічніші. У результаті, при зміні методу інтерфейсу не повинні змінюватися клієнти, які цей метод не використовують.

5. DIP (Dependency inversion principle) - Принцип інверсії залежностей
Формулювання:

Модулі верхніх рівнів не повинні залежати від модулів нижніх рівнів. Обидва типи модулів повинні залежати від абстракцій.
Абстракції не повинні залежати від деталей. Деталі повинні залежати від абстракцій.
Мається на увазі, щоб не створювати об'єкт всередині. 

Висновок ✌
TypeScript підтримує всі принципи ООП. Але не потрібно гнатися за всіма цими принципами, тупо відповідати їм - також погана практика, як і не відповідати їм взагалі. Якщо вас запитають на співбесіді, гівнокод або якісний код з усіма принципами ООП, скажіть сміливо, дивлячись скільки часу на завдання, якщо потрібно швидко, краще робочий гівнокод.

---------------------------------------------------------------------------------------------------------------------------------------------------------------

Інтерфейси

Інтерфейс - це визначення кастомного типу даних, але без реалізації. У всіх мовах, які підтримують ООП, інтерфейси працюють однаково, чимось схоже на абстрактні класи, тільки в абстрактних є часткова реалізація і тільки деякі частини реалізації ми кладемо на плечі дочірніх класів, а ось в інтерфейсі взагалі відсутня реалізація, він просто описує, яка повинна бути структура.
Нам необов'язково призначати інтерфейс класу, ми можемо вказати його як тип даних для об'єкта. 

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/64425024-f882-4d95-92f1-81d0faf65478)

Extending Interfaces

Ми можемо розширювати наші інтерфейси іншими за допомогою команди extends.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/b7d2a461-20f1-4634-aa1d-de06f9f150f2)
-------------------------------------------------------------------------------------------------------------------------------------------------------------------
<h2>UML та шаблони проектування</h2>

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/b122b527-bba1-4e39-a25e-b6a17b891c8b)

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/db726577-bc9d-435c-a109-e286c9dc7c1f)


<h2>Шаблони проектування</h2>

Ми розберемо декілька шаблонів проектування.
![image](https://github.com/0trava/TypeScript-materials/assets/102797527/da6042b5-6b3e-4f5d-801e-6418b4e38ffa)

Цей шаблон дозволяє не плодити об'єкти, повертаючи той самий екземпляр.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/88c230c4-9b7c-4f4c-b9ad-b0821cae0d19)

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/f25154c5-66dd-423e-abf7-1769e6c78275)

Використовується, коли нам потрібно багато однотипних об'єктів із загальним інтерфейсом.

![image](https://github.com/0trava/TypeScript-materials/assets/102797527/91ad5848-0e98-4c4c-9605-a3e77c5d5dc4)

<h3>Generics </h3>

Ще говорять узагальнений тип, оскільки generic - це загальний, ну ви навряд чи в компанії почуєте напиши тут узагальнений тип, я далі буду просто писати дженерик.

Ми знаємо, що масив - це об'єкт Array і хочемо уточнити, які типи він може містити.</p>

let arr: Array<string | number> = [];

Давайте ще приклад, коли це просто необхідно, це коли ми працюємо з асинхронним кодом. Оскільки Promise може повернути все, що завгодно, без дженерика ми ніколи не будемо знати, що він повертає.</p>

const promise: Promise<string> = new Promise((resolve) => {
  setInterval(() => {
    resolve('Done!');
  }, 1000);
});

promise.then((data) => {
  console.log(data);
});

</p>

<h3>Extends </h3>

Повернемося до попередньої функції, в ній є проблема, ми можемо передавати не тільки об'єкти в merge, і це не добре, хотілося б, щоб була помилка, коли ми передамо не об'єкт. Для цього ми можемо розширювати тим, використовуючи команду extends.
</p>
function merge<T extends object, U extends object>(objA: T, objB: U) {</p>
  return Object.assign(objA, objB);</p>
}</p>

const merged = merge({name: 'Alisa'}, { age: 20 });</p>

merged.name;</p>

Але давайте ще один приклад, у нас є функція, яка повертатиме довжину або рядка, або масиву. І ми вирішили використати дженерики для цього.

І ми отримуємо помилку, тому що TS не знає, а чи може бути функція length у типі, давайте створимо інтерфейс і явно покажемо, що це може бути будь-який тип, аби був length.

interface ILength {</p>
  length: number;</p>
}</p>

function getLength<T extends ILength>(str:T) {</p>
  return str.length;</p>
}</p>

getLength('text');</p>


<h3>Keyof </h3>

У нас на практиці напевно виникне потреба повернути значення з об'єкта, але, навіть якщо ви напишите дженерики, ви отримаєте помилку.
Оскільки TS не може гарантувати, що цей ключ є в об'єкті. Для цього є спеціальний оператор keyof. Він дозволяє зробити уточнення, що якийсь тип є ключем в об'єкті.
За допомогою U extends keyof T ми зробили уточнення, що тип U - це як ключ у типі T і тепер все працює.</p>


function extractValue<T extends object, U extends keyof T> (obj:T, key:U) {</p>
  return obj[key];</p>
}
</p>
extractValue({name: 'Sergei'}, 'name');</p>

<h3>Utility Types </h3>
Ми розберемо три типи, які принаймні мені доводиться часто використовувати.

Partial - Іноді буває така ситуація, коли у вас є якийсь тип даних, і там всі поля обов'язкові, але ви не можете заповнити їх відразу, але впевнені, що в результаті заповните. Для цього можна скористатися типом Partial, як я казав, це все дженерики. Ми сказали, що person є типом Partial<IPerson>, і тепер всі поля стали опціональними. Але при поверненні з функції нам потрібно вказати тип, інакше буде помилка.</p>

interface IPerson {</p>
  name: string;
  age: number;
}</p>

function createPerson (name: string): IPerson {</p>
  const person: Partial<IPerson> = {};</p>

  person.name = name;</p>
  person.age = 21;</p>

  return person as IPerson;</p>
}</p>

Readonly - Дуже зручна річ, пам'ятаєте ми робили тип кортежу? Але push все одно працювало, тож використовуючи цей тип, можна реально зробити незмінний масив.

const arr: Readonly<string[]> = ['One', 'Two', 'Three'];</p>

або </p>

type Environment = {</p>
  temperature: number;</p>
}</p>

const arr: Readonly<Environment> = {</p>
  temperature: 27,</p>
};</p>


Pick - Теж зручний тип даних, якщо нам потрібно якось урізати тип, взяти частину полів із нього.
Ми, наприклад, робимо сторінку анотацій і нам із типу Page потрібно лише кілька полів.</p>

interface Page {</p>
  title: string;</p>
  annotation: string;</p>
  numberPage: number;</p>
}</p>

const pageAnnotation: Pick<Page, 'annotation' | 'numberPage'> = {</p>
  annotation: 'Small page',</p>
  numberPage: 1,</p>
};</p>





