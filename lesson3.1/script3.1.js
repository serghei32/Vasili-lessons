const products = [{
        id: 1,
        name: "Alice",
        role: "Developer",
        isActive: true,
        skills: ["JavaScript", "React", "Node.js"]
    },
    {
        id: 2,
        name: "Bob",
        role: "Designer",
        isActive: false,
        skills: ["Photoshop", "Illustrator", "Figma"]
    },
    {
        id: 3,
        name: "Charlie",
        role: "Project Manager",
        isActive: true,
        skills: ["Agile", "Scrum", "JIRA"]
    },
    {
        id: 4,
        name: "Diana",
        role: "QA Engineer",
        isActive: true,
        skills: ["Testing", "Cypress", "Selenium"]
    },
    {
        id: 5,
        name: "Ethan",
        role: "Data Scientist",
        isActive: false,
        skills: ["Python", "Machine Learning", "TensorFlow"]
    },
    {
        id: 6,
        name: "Fiona",
        role: "HR Manager",
        isActive: true,
        skills: ["Recruitment", "Employee Engagement", "Payroll"]
    },
    {
        id: 7,
        name: "George",
        role: "DevOps Engineer",
        isActive: true,
        skills: ["AWS", "Docker", "Kubernetes"]
    },
    {
        id: 8,
        name: "Hannah",
        role: "Content Writer",
        isActive: true,
        skills: ["SEO", "Copywriting", "Blogging"]
    },
    {
        id: 9,
        name: "Ian",
        role: "Support Specialist",
        isActive: false,
        skills: ["Customer Service", "Zendesk", "Troubleshooting"]
    },
    {
        id: 10,
        name: "Jenna",
        role: "Product Manager",
        isActive: true,
        skills: ["Roadmap Planning", "Stakeholder Communication", "Prototyping"]
    }
];





const btnB = document.querySelectorAll('.btn')
const container = document.querySelector('.box')
const selectedItems = []


btnB.forEach((itemB) => {
    itemB.addEventListener('click', functionBut)

    function functionBut() {
        if (!selectedItems.includes(itemB.value)) {
            products.forEach((product) => {
                if (product.name === itemB.value) {
                    selectedItems.push(itemB.value)
                    container.innerHTML += `
                    <p>${product.name}</p>
                    `
                }
            })
        }
    }
})

























// btnB.forEach((itemButton) => { // начинаем с масива кнопок где пробегаемся по каждой и даем каждой фунцию. 
//     itemButton.addEventListener('click', () => {
//         const selected = itemButton.value

//         if (!selectedItems.includes(selected)) {

//             objects.forEach((object) => {
//                 if (selected === object.name) {
//                     selectedItems.push(selected)
//                     container.innerHTML += `
//                     <p>${objects.name}</p>
//                     `
//                 }
//             })
//         }

//     })

// })

// btnB.forEach((item) => { //  масиву всех кнопок  говорим что пройдись по всем кнопкам и 
//     item.addEventListener('click', () => { // при клике  запусти безымянную функцию , где ...
//         const selectedItm = item.value //  создай переменную которое принимает значение масива кнопки 

//         products.forEach((product)=>{
//             if(product.name===selectedItm){
//                 container.innerHTML+=`
//                 <p> ${product.skills}</p>

//                 `
//             }
//         })




// })
// }) 