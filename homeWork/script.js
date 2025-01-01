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
const arr= [100, 200, 300, 400]
arr.splice(1,2)
console.log(arr);
//7
const numbers=[1, 2, 3, 4]
numbers.splice(numbers.length,0,5,6)
console.log(numbers);

//8
const arr8=[1,2,3]
arr8.splice(0,arr8.length,5,6,7)
console.log(arr8);
//9
const arr9=[1,2,3]
arr9.splice(0,0,-2,-1)
console.log(arr9);

//10
const arr10=[15, 25, 35, 45]
arr10.splice(1,1,30,40)
console.log(arr10);

//***************************************** */