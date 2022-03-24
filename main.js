let inputButt =document.getElementById('inputButt')
let toDoInput =document.getElementById('toDoInput')
let toDoContainer =document.getElementById('toDoContainer')

inputButt.addEventListener('click',function(){
  if(toDoInput.value!=''){
    let para =document.createElement('p');
    para.innerText=toDoInput.value;
    let button =document.createElement('button');
    button.innerText='X';
      toDoContainer.appendChild(para);
      toDoContainer.appendChild(button)
     toDoInput.value=''
     
     button.addEventListener('click',function(){
       toDoContainer.removeChild(button)
       toDoContainer.removeChild(para)
     })
    
  }
  else{
    alert('write your task here')
  }

  
  
  
  
  
  
})