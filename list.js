let count=0;


var values = document.getElementById('values');
var increase = document.querySelector('.increase');
var decrease = document.querySelector('.decrease');
var reset = document.querySelector('.reset');


increase.addEventListener('click',countin);

function countin(e){
    const actions = e.target.classList;
    if(actions.contains('increase')){
        count++
    }
    values.textContent=count
}


decrease.addEventListener('click',runDown);


function runDown(e){
    var actions=e.target.classList;
    if(actions.contains('decrease')){
        count--
    }
    values.textContent=count

}
reset.addEventListener('click',still);


function still(e){
    var actions=e.target.classList;
    if(actions.contains('reset')){
        count=0
    }
    values.innerText=count
}
