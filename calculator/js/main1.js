
// display number function
const display = document.querySelector('.display');
function displaynumber(e){
    display.innerHTML += e.target.innerHTML 
}





const ans = document.querySelector(".answer")
ans.addEventListener('click',answer)

function answer(){
    //const result = eval(display.innerHTML)
    //console.log(result)
    console.log((Math.result));
    //display.innerHTML += ' = ' + result;  
}

const num = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operators');

//console.log(num)
//console.log(operators)
num.forEach(number => number.addEventListener('click', displaynumber));
operators.forEach(operator => operator.addEventListener('click',displaynumber))

const clear= document.querySelector('.clear');
clear.addEventListener('click',cleared)
function cleared(){
 display.innerHTML = " ";
}

const trig = document.querySelectorAll('.trig')
trig.forEach(tri => tri.addEventListener('click', mathfunction))

function mathfunction(){
   display.innerHTML
}