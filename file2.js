let button = document.querySelector('button')
let div = document.querySelector('div')
let h1 = document.querySelector('h1')

button.addEventListener('click',function(){
    h1.classList.toggle('shw')
    div.classList.toggle('shw')
})
