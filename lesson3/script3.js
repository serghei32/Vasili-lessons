const products = [{
        id: 1,
        img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
        name: "Fiesta",
        ingredients: "Chicken breast, mozzarella, red onion, bell peppers, fresh tomatoes, chorizo salami, chipotle sauce, ranch sauce, granulated garlic",
        price: 29.9,

    },
    {
        id: 2,
        img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
        name: "Margherita Classic",
        ingredients: "Chicken breast,  chipotle sauce, ranch sauce, granulated garlic",
        price: 29.9,

    },
    {
        id: 3,
        img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
        name: "Dracula",
        ingredients: "Tomato sauce, chorizo salami, jalapeno peppers, pepperoni salami, mozzarella, chipotle sauce",
        price: 29.9,

    },
    {
        id: 4,
        img: "https://cdn.dodostatic.net/static/Img/Products/c4bb774e6f654f239b79032c60e8fcd4_292x292.jpeg",
        name: "Rustica",
        ingredients: "Chicken breast, ham, red onion, mozzarella, bell peppers, tomato sauce, corn",
        price: 29.9,

    },
];

const box4 = document.querySelector('.box4')

const btnM = document.querySelectorAll('.btn') // это перемення в которые записываются в масив  все кнопки 
console.log(btnM);
selectedItems = []
btnM.forEach((item, index) => { // по всем кнопкам пробегаем  
    item.addEventListener('click', () => { // каждому эллементу масива кнопок вешаем обработчик событий  который сработает на клик 
        const btnNode = item.value //  создаем переменную которой присвоим свойство кнопки value 
       
        if (!selectedItems.includes(btnNode)) {
            products.forEach((product) => { //  проходим по всем продуктам  метоодом forEach  где скажем что если : 
              
                if (product.name === btnNode) { //  ключ(name) обьекта{}  равен  значению кнопки btnNode // то выведи следущее : 
                    selectedItems.push(btnNode)
                    box4.innerHTML += `  
                <img src="${product.img}" alt="foto">
                <p>${product.name}</p>
                <p>${product.ingredients}</p>
                <p> price is:${product.price}</p>
                `
                }
            })


        }


    })

})

// const inp = document.querySelector('.btn-1')
// inp.addEventListener('input', inpFunction)
// const box5 = document.querySelector('.box5')

// function inpFunction(){
//     console.log(inp.value);
//     box5.innerHTML = ' '
//     products.forEach((product)=>{
//         if(inp.value >=product.price){
//             box5.innerHTML+=`
//             <img src="${product.img}" alt="foto">
//             <p> price is:${product.price}</p>
//             `
//         }
//     })
// }