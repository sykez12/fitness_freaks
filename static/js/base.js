const allproducts = document.querySelector('.allproducts')
const colors = ['teal', 'lightblue',]


allproducts.addEventListener('click', changeColor)

function changeColor(){
const colorIndex= parseInt(Math.random()*colors.length)
allproducts.style.color = colors[colorIndex]
}


const gymequipment = document.querySelector('.gymequipment')
const colorstwo = ['violet', 'pink',]


gymequipment.addEventListener('click', changeColorTwo)

function changeColorTwo(){
const colorIndex= parseInt(Math.random()*colors.length)
gymequipment.style.color = colorstwo[colorIndex]
}


const gymwear = document.querySelector('.gymwear')
const colorsthree = ['green', 'lightgreen',]


gymwear.addEventListener('click', changeColorThree)

function changeColorThree(){
const colorIndex= parseInt(Math.random()*colors.length)
gymwear.style.color = colorsthree[colorIndex]
}


const blogs = document.querySelector('.blogs')
const colorsfour = ['orange', 'red',]


blogs.addEventListener('click', changeColorFour)

function changeColorFour(){
const colorIndex= parseInt(Math.random()*colors.length)
blogs.style.color = colorsfour[colorIndex]
}