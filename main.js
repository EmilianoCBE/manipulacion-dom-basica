// const h1 = document.querySelector('h1');
// const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito')
// const parrafitito = document.querySelector('#parrafitito');
// const input = document.querySelector('input')

// console.log(h1)

// console.log({
//     h1,
//     parrafito,
//     parrafitito,
//     input
// })

// h1.innerHTML = 'Elden <br> Ring' //Cambiar el HTML directamente
// h1.innerText = 'Elden <br> Ring' //Cambiar solamente el texto del h1
// console.log(h1.getAttribute('pantalla'))
// h1.setAttribute('class', 'rojo')

// h1.classList.add('rojo')
// h1.classList.remove('verde')
// h1.classList.toggle('verde')
// h1.classList.contains('verde') devuelve true o false dependiendo si el elemento tiene la clase de

// input.value = "456" 

// const img = document.createElement('img')
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png')

// parrafitito.append(img)

const h1 =document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1') 
const input2 = document.querySelector('#calculo2') 
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#result')

form.addEventListener('submit', sumInput) //? No necesitan los paréntesis, el addEventListener se encarga de ejecutarlo

const sumInput = (event) => {
    event.preventDefault()
    const suma = parseInt(input1.value) + parseInt(input2.value)
    result.innerText = `Resultado: ${suma}`
}

// button.addEventListener('click', sumInput2) //? No necesitan los paréntesis, el addEventListener se encarga de ejecutarlo

// const sumInput2 = () => {
//     const suma = parseInt(input1.value) + parseInt(input2.value)
//     result.innerText = `Resultado: ${suma}`
// }