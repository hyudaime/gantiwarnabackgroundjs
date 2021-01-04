//memilih warna random
const button = document.querySelector('button')
const body = document.querySelector('body')
const warna = ['red','green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex= parseInt(Math.random()*warna.length)
    body.style.backgroundColor = warna[colorIndex]
}