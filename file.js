let button=document.querySelector('button')
let h1=document.querySelector('h1')



button.addEventListener('click',function(){
    let r=Math.floor(Math.random()*255+1)
    let g=Math.floor(Math.random()*255+1)
    let b=Math.floor(Math.random()*255+1)
    let randomrgb=`rgb(${r},${g},${b})`;
    h1.style.color='white'
    h1.innerText=randomrgb
    document.body.style.backgroundColor=randomrgb;
    button.style.color=randomrgb
})
