// const inputItem = document.querySelector('.type_text')
// const carBtn = document.querySelector('.btn')
// const box = document.querySelector('.box1')



// carBtn.addEventListener('click', carFunction)

// function carFunction() {
//     check= false
//     cars.forEach((item) => {
//         if (inputItem.value === item.model) {
//             check= true
//             box.innerHTML +=
//                 box.innerHTML = `
//              <ul>
//                <li>${item.model}</li>
//                <li>${item.color}</li>
//                <li>${item.year}</li>      
//              </ul>
//              `
//         }

//     })
//     if (check ===false) {
//         box.innerHTML +=
//         box.innerHTML = `<p>wrang</p>`
//     }


// }

// const cars = [{
//         model: 'Mustang',
//         year: 1964,
//         engine: 'V8',
//         color: 'Red',
//         price: 100000
//     },
//     {
//         model: 'Camaro',
//         year: 1967,
//         engine: 'V8',
//         color: 'Blue',
//         price: 95000
//     },
//     {
//         model: 'Challenger',
//         year: 1970,
//         engine: 'V8',
//         color: 'Black',
//         price: 110000
//     },
//     {
//         model: 'Corvette',
//         year: 1963,
//         engine: 'V8',
//         color: 'Yellow',
//         price: 120000
//     },
//     {
//         model: 'Firebird',
//         year: 1969,
//         engine: 'V8',
//         color: 'Green',
//         price: 105000
//     }
// ];







// const peaople = [];
// peaople.push('vasia', 'valera')
// console.log(peaople);

// ///3
// const num = [1, 2, 3];
// for (let i = 0; i < 5; i++) {
//     num.push(6, 7)
// }
// console.log(num);
// //5
// const arr = ['vasia', 'valera', 'lesha']
// const result = arr.push()
// console.log(result);


// //6
// const newElement = document.createElement('div');
// const users = [];
// users.push({
//         name: 'John',
//         age: 21
//     }, {
//         name: 'Alex',
//         age: 26
//     }, {
//         name: 'Sasha',
//         age: 25
//     },

// );
// console.log(users);
// users.forEach((item) => {
//     newElement.innerHTML += `
//      <li>${item.name}</li>
//     `;
// });
// document.body.appendChild(newElement)

// //7
// const mainArray = [];
// const subArray = [1, 2, 3];
//  mainArray.push(subArray)
//  document.write(mainArray)
//  console.log(mainArray);

//  8. Добавление с пользовательским вводом

// Напишите скрипт, который:

//     Создаёт пустой массив.
//     Запрашивает у пользователя через prompt несколько значений.
//     Добавляет каждое значение в массив через .push().

// const input=[]
// prompt('vvedite znachenie: ')
// input.push(prompt.value)
// console.log(input);

//-*********************************************************************


// const arr = ['vasia', 'valera', 'lesha']
// const newElem= arr.shift()
// const twoElem= arr.pop()
// console.log(newElem);
// console.log(twoElem);


/// splise 

// const num = [1, 2, 3, 4, 5, 6]
// const remove=num.splice(2,3)
// console.log(num);
//3
// const num=[10, 20, 30, 40];
// num.splice(2,0, 50,60)
// console.log(num);

//3
// const num = [1, 2, 3, 4, 5]
// num.splice(1,2,10,20)
// console.log(num);

//4
// const num = [1, 2, 3, 4, 5, 6]
// num.splice(4,11)
// console.log(num);

//5
// const numbers=[]
// numbers.splice(0,0, 7,8,9)
// console.log(numbers);

//6
// const arr= [100, 200, 300, 400]
// arr.splice(1,2)
// console.log(arr);
// //7
// const numbers=[1, 2, 3, 4]
// numbers.splice(numbers.length,0,5,6)
// console.log(numbers);

// //8
// const arr8=[1,2,3]
// arr8.splice(0,arr8.length,5,6,7)
// console.log(arr8);
// //9
// const arr9=[1,2,3]
// arr9.splice(0,0,-2,-1)
// console.log(arr9);

// //10
// const arr10=[15, 25, 35, 45]
// arr10.splice(1,1,30,40)
// console.log(arr10);

//***************************************** */

//slice()

// индекс начала, позиция элемента, начиная с которого будут копироваться элементы;
// индекс конца, позиция элемента следующего за последним копируемым элементом в исходном массиве.

//1
// const newElement= document.createElement('ul')
// const arr1= [10, 20, 30, 40, 50];

// const varArr1=arr1.slice(0,3)
// console.log(varArr1);


// varArr1.forEach((item)=>{
// const liItem=document.createElement('li')
// liItem.textContent=item
// newElement.appendChild(liItem)
// })

// document.body.appendChild(newElement)

//2
// const arr2= [10, 20, 30, 40, 50];

// const varArr2=arr2.slice(0,2)
// const copy = arr2.slice()
// console.log(copy);
// console.log(varArr2);


// const arr3= [10, 20, 30, 40, 50];
// arr3.splice(0,1,'privet')
// console.log(arr3);

//******************************************************* */

// const arr3= [10, 20, 30, 40, 50,900];
// const arr4= arr3.slice()
// console.log(arr4);

//******************************************
// find */

// const numbers = [3, 7, -2, 8, -5, 10];

// array.find(function (element, index, array) {
//     // условие
//     return true / false;
// });

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.find((num, index) => {
//     console.log(index); // Это действие выполнится
//     num > 3; // Это условие не вернет ничего
// });

// console.log(result); // undefined

//***************************************** */
// const numm = [5, 12, 3, 18, 7]
// result = numm.find(item => item > 10)
// console.log(result);

// const names =[{name: 'Bob'}, {name: 'Alice'}, {name: 'Charlie'}]
// const name1=names.find(item=> item.name==='Alice')
// console.log(name1);

// const fruts = ["apple", "banana", "cherry"]
// const frut = fruts.find(item=>item.includes('a'))
// console.log(frut);


// const num = [3, -1, 4, -5, 7]
// const number = num.find(item=> item =>0)
// console.log(number);

// const ages = [{name: 'John', age: 25}, {name: 'Alice', age: 35}, {name: 'Bob', age: 40}]
// const people=ages.find(item=>item.age>30)
// console.log(people);

// const num = [1, 2, 4, 6, 8]
// const number = num.find(item=> item%3===0)
// console.log(number );

//7
// const animals=["cat", "dog", "elephant"]
// const animal = animals.find(item=>item.length>3)
// console.log(animal);

// const peoples=[{id: 1, name: 'Tom'}, {id: 2, name: 'Jerry'}, {id: 3, name: 'Spike'}]
// const people=peoples.find(item=> item.id===2)
// console.log(people);


// const prises =[{name: 'Laptop', price: 1200}, {name: 'Phone', price: 300}, {name: 'Tablet', price: 600}]
// const prise=prises.find(item=> item.price>500)
// console.log(prise);

// const words = ["car", "bike", "bus", "train"]
// const word = words.find(item=>item.includes('b'))
// console.log(word);

// const numbers = [15, 20, 25, 30, 35]
// const num = numbers.find(item=>item%5===0)
// console.log(num);

// const string=["short", "medium", "longer", "longest"]
// const st=string.find(item=>item.length>6)
// console.log(st);

// const string=[
//     {name: 'Task 1', status: 'completed'}, 
//     {name: 'Task 2', status: 'active'},
//     {name: 'Task 3', status: 'inactive'}

// ]
// const st=string.find(item=>item.status==='active')
// console.log(st);

// const items = [{
//         id: 1,
//         status: 'pending',
//         rating: 4.2,
//         price: 300,
//         name: 'John',
//         isAvailable: false,
//         likes: 200,
//         category: 'furniture',
//         age: 25,
//         weight: 60,
//         createdAt: '2023-03-15',
//         role: 'user',
//         height: 170,
//         discount: null,
//         stock: 5,
//         manufacturer: 'Apple',
//         priority: 'low',
//         tags: ['popular']
//     },
//     {
//         id: 2,
//         status: 'completed',
//         rating: 4.8,
//         price: 400,
//         name: 'Jane',
//         isAvailable: true,
//         likes: 600,
//         category: 'electronics',
//         age: 17,
//         weight: 90,
//         createdAt: '2023-05-20',
//         role: 'admin',
//         height: 185,
//         discount: 10,
//         stock: 8,
//         manufacturer: 'Samsung',
//         priority: 'high',
//         tags: ['featured', 'bestseller']
//     },
//     {
//         id: 3,
//         status: 'cancelled',
//         rating: 3.9,
//         price: 200,
//         name: 'Jack',
//         isAvailable: false,
//         likes: 150,
//         category: 'books',
//         age: 30,
//         weight: 55,
//         createdAt: '2022-10-10',
//         role: 'user',
//         height: 175,
//         discount: 5,
//         stock: 0,
//         manufacturer: 'Sony',
//         priority: 'medium',
//         tags: ['new']
//     }
// ];
// //1
// const task1 = items.find(item => item.status === 'pending')
// console.log(task1);
// //2
// const task2 = items.find(item => item.rating > 4.5)
// console.log(task2);
// //3
// const task3 = items.find(item=>item.price%100===0)
// console.log(task3);3
// //4 
// const task4 = items.find(item => item.isAvailable===true)
// console.log(task4);
// //5
// const task5 = items.find(item=>item.likes>500)
// console.log(task5);
// //7
// const task6 = items.find(item => item.category==='electronics')
// console.log(task6);
// //8
// const task8 = items.find(item => item.age<18)
// console.log(task8);
// //9
// const task9 = items.find(item => item.weight>50&& item.weight<100)
// console.log(task9);

// //10
// const task10 = items.find(item => item.rating===3.9)
// console.log(task10);

// //11
// const task11 = items.find((item,index) => {
//     index===2
// })
// console.log(task11);

// ***************************index in find()

// const items = [{
//         name: 'John',
//         age: 25,
//         isActive: true,
//         price: 40
//     },
//     {
//         name: 'Alex',
//         age: 30,
//         isActive: false,
//         price: 60
//     },
//     {
//         name: 'Emma',
//         age: 22,
//         isActive: true,
//         price: 45
//     },
//     {
//         name: 'Sophia',
//         age: 27,
//         isActive: true,
//         price: 70
//     },
//     {
//         name: 'Michael',
//         age: 35,
//         isActive: false,
//         price: 55
//     },
//     {
//         name: 'Jake',
//         age: 29,
//         isActive: true,
//         price: 20
//     },
//     {
//         name: 'Laura',
//         age: 40,
//         isActive: false,
//         price: 80
//     },
//     {
//         name: 'Steve',
//         age: 18,
//         isActive: true,
//         price: 15
//     },
//     {
//         name: 'Alice',
//         age: 23,
//         isActive: false,
//         price: 35
//     },
// ];




// const item= items.find((it,index)=>it.name==='Alice')
// console.log(item);


//1 Найдите первый элемент массива, у которого индекс четный.
// const item1 = items.find((item, index) =>
//     index % 2 === 0
// )
// console.log(item1);

// const item2 = items.find((item, index) =>
//     item.name==='Alex' && index<2);
//     console.log(item2);

// const item3 = items.find((item, index) => item.isActive===true && index <5);
// console.log(item3);

// const item4 = items.find((item, index) => item.age > 30 && index % 2 !== 0);
// console.log(item4);

// const res4 = items.find((item, index) => item.age > 30 && index % 2 !== 0);
// console.log(res4); // { name: 'Laura', age: 40, ... }

// const res1 = items.find((item, index) => item.price <50 && index % 3=== 0);
// console.log(res1); // { name: 'Laura', age: 40, ... }

// const res5 = items.find((item, index) => item.name.length>5  && index % 4=== 0);
// console.log(res5); // { name: 'Laura', age: 40, ... }

// const colors = ["white", "black", "green", "red", "yellow"];
// if (colors.includes('white')) {
//     console.log('ti popal');

// } 
// else {
//     console.log('mimo');

// }

// let arr = [5, 10, 15, 20, 25, 30];

// const item1= arr.indexOf(25)
// console.log(item1);
// console.log(item1);


// let str = "Сегодня хороший день для прогулки";
// const item2= str.indexOf('д')
// console.log(item2);


// let str1 = "Алфавит начинается с буквы А";
// const item3 = str1.indexOf("а", 5);
// console.log(item3);


// let arr = [10, 20, 30, 40, 50]; 
// const item=arr.indexOf(50)
// console.log(item);


//******************************************filter()   

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = numbers.filter(item => item > 5)
// console.log(newArr);
// console.log(numbers);

// const strings = ['a', 'ab', 'abc', 'abcd', 'abcde']; 
// const item = strings.filter(enhet=> enhet.length>3)
// console.log(item);

//2
// const users = [
//     { name: 'John', age: 25 },
//     { name: 'Alex', age: 17 },
//     { name: 'Emma', age: 22 },
//     { name: 'Sophia', age: 15 }
// ];

//3
// const people = users.filter(item=> item.age>18)
// console.log(people);
//4
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const num = numbers.filter(item => item % 3 === 0)
// console.log(num);

// const strings = ['Apple', 'Banana', 'Avocado', 'Grapes'];
// const frukt= strings.filter(item=>item.startsWith('A'))
// console.log(frukt);

// const products = [
//     { name: 'Product1', price: 40 },
//     { name: 'Product2', price: 60 },
//     { name: 'Product3', price: 70 }
// ];


// const box = products.filter(item=>item.price>40)
// console.log(box);

// const products = [
//     { name: 'Product1', inStock: true },
//     { name: 'Product2', inStock: false },
//     { name: 'Product3', inStock: true }
// ];

// const box=products.filter(item=>item.inStock)
// console.log(box);

// const itemss = ['JavaScript', 'Java', 'C++', 'Python', 'JavaFX'];
// const item = itemss.filter(enhet=>enhet.includes('Java'))  
// console.log(item);

// const numbers = [1, 3, 5, 7, 9, 10, 12, 15];
// const num = numbers.filter(item => item % 3===0 || item % 5===0)
// console.log(num);



// const users = [{
//         name: 'James',
//         height: 172,
//         mass: 77,
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Robert',
//         height: 202,
//         mass: 136,
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia',
//         height: 150,
//         mass: 49,
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'John',
//         height: 188,
//         mass: 84,
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];

// const man = users.filter(item => item.mass > 100)
// console.log(man);

// const container = document.querySelector('.box1')
// users.forEach(element => {

    // if(element.gender==='male'){
    //     container.innerHTML+=`
    //     <div class='frame_men'>
    //         <p>${element.name}</p>
    //         <p>${element.gender}</p>
    //     </div>
    //     `
    // }
    // else{
    //     container.innerHTML+=`
    //     <div class='frame_women'>
    //         <p>${element.name}</p>
    //         <p>${element.gender}</p>
    //     </div>
    //     `
    // }

//     const elem = (element.gender === 'male') ? 'frame_m' : 'frame_w'
//     container.innerHTML += `
//     <div class='${elem}'>
//         <p>${element.name}</p>
//         <p>${element.gender}</p>
//     </div>
//     `
// });

// Создать алгоритм, который запросит у пользователя температуру на улице. Если введенное значение
// окажется больше 15, то программа вернет значение 'Тепло'. Если введенное значение окажется ниже 5
// градусов, то ответить 'Холодно'. Для остальных значений вернуть значение 'Нормально'. Например,
// пользователь ввел значение 10. Ответ: 'Нормально'



// const vvod = prompt('введенное значение: ')

// // if (vvod > 15) {
// //     console.log('teplo');
// // } else if (vvod < 5) {
// //     console.log('holodno');
// // } else {
// //     console.log('NORMALNO');
// // }

// const issue= (vvod>15)? 'teplo'
// :(vvod < 5)?'holodno'
// :'normalno'
// console.log(issue);


// Напишите массив дней недели. 
// ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
//      Создайте в html элемент div.
//     В созданный div c помощью цикла for выведите все дни недели,
//      а выходные дни выведите жирным шрифтом.

const container = document.querySelector('.box1')
const days=["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
days.forEach((element,index) => {
    const twoDays= index>4? 'bold': ''
    container.innerHTML +=`
    <p class='${twoDays}' ${element}</p>
    
    
    `
});
