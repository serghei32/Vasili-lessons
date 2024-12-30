 // ------------------1 task


 // for(let i=1; i<=10;i++){
 //     console.log(i);

 // }


 //--------------2 task 

 // const numbers=[1,2,3,4,5];

 // for(let i=0; i<=numbers.length;i++){
 //     console.log(numbers[i]);

 // }


 //--------------2 task  - help off chat gpt также путаюсь с извлечением и работой над индексами и значениями (масива)

 //  const numbers = [1, 2, 3, 4, 5];
 //  const result = [];
 //  for (let i = 0; i < numbers.length; i++) {
 //      if (numbers[i] >= 2 && numbers[i] <= 4) {
 //          result.push(numbers[i])
 //      } 
 //  }
 //  console.log(result);


 //-----------------------3 task   почти сам 

 //  const carsArray = ['mercedes', 'volvo', 'volkswagen', 'skoda'];
 //  const cars = document.querySelector('.cars')  // достал div from  html 

 //  const arrayToString= carsArray.toString()//  преобразовываю масив в список при помощи метода toString потому как createTextNode ожидает строку 

 //  const carsNode= document.createTextNode(arrayToString) // добавляю этот список в текстовый узел путем создания переменной 

 //  cars.appendChild(carsNode) // засовываю текстовый узел в div с помощью appendChild!
 //  console.log(cars);


 //-----------------------4 task 

 //  const num= [2, 3, 4, 5] 
 //  const res=[]
 //  for(let i=0; i<= num.length;i++){ // бежим по масиву пока его длинна(индексов) это позволяет.включаю инкримент с шагом 1 
 //     res.push(num[i]*5)// в пустой масив закидывю то что вывел мне индекс с умн на 5. 
 //  }
 //  console.log(res);


 //-----------------------5 task  не получилось 
 //  const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]

 //  const weekNode = document.querySelector('.week') //достал див 

 //  const textWeek = week.toString() //  преобразовал масив в текст
 //  const textItemNode = document.createTextNode(textWeek) // создание текстового узла и помещение в него списка для дальнейшего его внедрения в dom element
 //  const lastTwoElements = week.slice(-2) // создаю последние дня недели 
 //  const spanNode6 = document.createElement('span') // создаю спан 
 //  const spanNode6Text =document.createTextNode(lastTwoElements[0])
 // //  spanNode6Text.style.color = 'red';
 //  spanNode6.style.color = 'red';

 // spanNode6.appendChild(spanNode6Text)

 //  weekNode.appendChild(textItemNode)

 // -------- 5 task ---


 //   const week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
 //   const weekNode = document.querySelector('.week')
 //   const ulNode = document.createElement('ul')
 //   weekNode.appendChild(ulNode)

 //   for (let i = 0; i < week.length; i++) { // счетчик будет сравниваться с индексами масива и шагать вперед 
 //       const liNode = document.createElement('li')// sozdal ellement
 //       liNode.textContent = week[i] // pomestil v etot element tekstovii uzel . тут в i будет отображаться значение счетчика на каждой итерации а не значение индекса. 
 //       ulNode.appendChild(liNode) // zasunul li v ul
 //       console.log(i);

 //       if (i === 5 || i === 6) { // значение счетчика сравниваем с значениями сб и вс которые имеют индекс  5 и 6 
 //           liNode.style.fontWeight= 'bold' // пишем nodeЭллементу стилистику
 //       }
 //   }

 //---------------------------------------------


 //  const numberss = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
 // const resultat=[]
 //  for(let i =0; i<numberss.length; i++){
 //     if(numberss[i]>0 && numberss[i] <10 ) // сравниваю значение масива которое итерируется 
 //         resultat.push(numberss[i]) // вытаскиваю значение масива а не индекс   
 // }
 // document.write(resultat)


 // ----------------------------forEach 1

 const students = ['John', 'Sara', 'Jack'];

 students.forEach((item) => {
         console.log(`hi ${item}`);
 })

 //------------------------- forEach 2
 const arrayItems = ['item1', 'item2', 'item3'];
 const copyItems = [];

 arrayItems.forEach((item) => {
     copyItems.push(item)
 })
 console.log(copyItems);

 //------------------------- forEach 3
 const scores = [5, 8, 3, 10, 7];
 newArray = []
 scores.forEach((item) => {
     newArray.push(3 * item)
 })
 console.log(newArray);

 let res = scores.includes(8)
 console.log(res);
 //*********************************************************************

 const courses = ['Biology', 'Mathematics', 'Chemistry', 'Physics'];

 courses.forEach((item, index) => {
     console.log(`${index}: ${item}`);
 })

 const grade = [33, 90, 78, 94, 56, 88, 97];
 result = []
 grade.forEach((item) => {
     if (item > 70) {
         result.push(item)

     }
 })
 console.log(result);
 //********************************************************************* 

 //  const numbers = [1, 2, 3, 4, 5];
 //  sum = 0
 //  numbers.forEach((item) => {
 //      sum = sum + item
 //     })
 //     console.log(sum);


 //Умножение каждого элемента

 const numbers = [10, 20, 30];
 const summery = []
 numbers.forEach((item) => {
     let result = item * 2
     summery.push(result)
 })
 console.log(summery);


 //Напишите код, который создаёт массив из длин строк, используя forEach.
 const words = ['apple', 'banana', 'cherry'];
 const length = []
 words.forEach((item, index) => {
     length.push(item.length)
     length.push(index)
     
 })

 console.log(length);


 