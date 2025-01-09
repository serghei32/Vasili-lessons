// let number = 7;

// // const control = number % 2 === 0 ? 'четное' : 'нечетное'
// // console.log(control);

// let num = -5 

// const check= num===0? 'равно ноль': (num>0)? 'положительное': 'otrizatelnoe'

// console.log(check);


// let age = 20;
// let category = age >= 18 ? "Взрослый" : "Несовершеннолетний";
// console.log(category);





// Напишите массив дней недели. 
// ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
//      Создайте в html элемент div.
//     В созданный div c помощью цикла for выведите все дни недели,
//      а выходные дни выведите жирным шрифтом.



// const btn = document.querySelector('.btn')
// btn.addEventListener('click', btnFunction)

// function btnFunction() {
//     const box = document.querySelector('.box2')
//     const days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
//     box.innerHTML = '';
//     days.forEach((item, index) => {
//         const twoDays = index > 4 ? 'red_font' : ''
//         box.innerHTML += `
//     <p class='${twoDays}'>${item}</p>`
//     })
// }


///////********************************************* */


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
//     const elem = (element.gender === 'male') ? 'frame_m' : 'frame_w' // в переменную elem попадет true 'frame_m' если false 'frame_w'
//     container.innerHTML += `
//         <div class='${elem}'>
//             <p>${element.name}</p>
//             <p>${element.gender}</p>
//         </div>
//         `
// });

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

const package = [{
        id: 0,
        level: `free`,
        price: `$0`,
        user: 15,
    },
    {
        id: 1,
        level: `standart`,
        price: `$29`,
        user: 15,
    }, {
        id: 2,
        level: `busines`,
        price: `$59`,
        user: 15,
    }, {
        id: 3,
        level: `professional`,
        price: `$139`,
        user: 15,
    },

]

const box = document.querySelector('.box3')
package.forEach((item, index) => {
    const elBg = index === 2 ? 'bg_light_blue' : (index === 3 ? `bg_dark_blue` : 'default')
    // const btnBg = index === 2 ? 'hover_btn'  : ''/
    box.innerHTML += `
    <ul class= 'ul_list ${elBg}'>
       <li class='list_item '> ${item.level}</li>
       <li class='list_item '> ${item.price}</li>
       <li class='list_item '> ${item.user}<span>Users</span></li>
       <li> <p>per mounth</p></li>
       <li> <p>Featere2</p></li>
       <li> <p>Featere3</p></li>
       <li> <p>Featere4</p></li>
       <li> <button class='active'>Get plan</button></li> 
    </ul>
    `

    const buttons = document.querySelectorAll('.active')
    buttons.forEach((item, index) => {
        item.addEventListener('click', btnFunction)
        function btnFunction() {
            alert(`You selected the ${package[index].level} plan for ${package[index].price}!`);
        }
    })



    // const buttons = document.querySelectorAll('.active')

    // buttons.addEventListener('click', btnFunction)
    // function btnFunction (){
    //     alert(`You selected the ${package[index].level} plan for ${package[index].price}!`);
    // }



})