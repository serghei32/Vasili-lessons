const objects = [{
        img: "https://slon.fr/wp-content/uploads/2019/08/udaipur-2311788_1920-2.jpg ",
        title: 'Николас де Овандо',
        desc: 'От замка Эшфорд в Ирландии до испанских парадоров, от колониальных дворцов Санто-Доминго до дворца Махараджи в Раджастхане, от особняков с привидениями в Шотландии до австрийских замков — вот наш виртуальный тур по замковым отелям, где могут принять прекрасного принца или Спящую красавицу!'
    },
    {
        img: "https://slon.fr/wp-content/uploads/2019/08/udaipur-2311788_1920-2.jpg ",
        title: 'Фронтенак',
        desc: 'Этот замок не похож на все остальные. Несмотря на распространенное мнение, это не средневековая крепость, ведь Фронтенак построен в Канаде, а замок, сооруженный в конце XIX-го века канадскими железнодорожными компаниями и изначально являвшийся роскошным отелем. Замок Фронтенак принадлежит престижной группе компаний Fairmont Canadian Hotel Group!'
    },
    {
        img: "https://slon.fr/wp-content/uploads/2019/08/udaipur-2311788_1920-2.jpg ",
        title: 'Эшфорд',
        desc: 'В Сафре, в Эстремадуре, недалеко от португальской границы, любители старины и древних построек обладают привилегией остановиться в средневековом замке, дворце герцогов Ферия, национальном туристическом парадоре, считающимся таковым с 1968 года. Этот величественный испанский замок'
    }

]


const box = document.querySelector('.wrapper')
objects.forEach((item,index) => {
 const section=document.createElement('section')
 section.classList='section_wrapper'

    section.innerHTML += `
        <img class='image' src="${item.img}" alt="">
        <div class='wrapper_item'>
            <h2>${item.title}</h2>
            <p class='text'>${item.desc}</p>
        </div>
    `
    if(index===1){
        section.classList.toggle("section_wrapper_reverse")
        
    }

    box.appendChild(section)
 
})