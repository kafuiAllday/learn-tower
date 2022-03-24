let tname =document.getElementById('tname');
let tamount =document.getElementById('tamount');
let tdate =document.getElementById('tdate');
let tbutton =document.getElementById('tbutton');
let myTable =document.getElementById('myTable');



tbutton.addEventListener('click',function(){
    if(tamount.value!='' && tname.value!='' && tdate.value!=''){

        let putRow= myTable.insertRow();
        let nowCell1=putRow.insertCell(0);
        let nowCell2=putRow.insertCell(0);
        let nowCell3=putRow.insertCell(0);
    
        nowCell1.innerText=tamount.value
        nowCell2.innerText=tdate.value;
        nowCell3.innerText=tname.value;
        
    }
    else{
        alert('fill all inputs')
    }

    
        
    })


