let game1 = document.querySelector('#gmScore1');
let game2 = document.querySelector('#gmScore2');
let rst = document.querySelector('.reset');
let up = document.querySelector('.up');
let ups = document.querySelector('.up1');
let selection = document.querySelector('select');

let scores=0;

up.addEventListener('click',gamePro);

//player 1 button 
function gamePro(e){
    const acts =e.target.classList;
    if(acts.contains('up')){
        scores++
    }
    game1.textContent=scores;
    if(scores>=selection.value && score<selection.value){
        game1.style.color='green'
        up.style.backgroundColor='green'
        up.style.color='white'
        ups.style.backgroundColor='yellow'
        ups.disabled='true'
        up.disabled='true'
        


    }
    
}

//reset button
rst.addEventListener('click',backGm);
function backGm(e){
    const acts =e.target.classList;
    if(acts.contains('reset')){
        scores=0;
        score=0;
    }
    game1.textContent=scores
    game2.textContent=score
    ups.style.backgroundColor='white'
    up.style.backgroundColor='white'
    game1.style.color='black'
    game2.style.color='black'
    ups.style.color='black'
    up.style.color='black'


    
    
    
}
//player 2 button
let score=0;
ups.addEventListener('click',gamePro1);
function gamePro1(e){
    const acts =e.target.classList;
    if(acts.contains('up1')){
        score++
    }
    game2.textContent=score;
    if(score>=selection.value && scores<selection.value){
        game2.style.color='green';
        ups.style.backgroundColor='green';
        up.style.backgroundColor='yellow';
        ups.style.color='white'
        ups.disabled='true'
        up.disabled='true'
        

    }
    
}

