
var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var timer = document.getElementById('timer')
let t=5;
timer.innerHTML=t;
var buttons = document.getElementById('buttons')
buttons.onclick = change_num
let scores =0
function change_num(){
    number1.innerHTML= Math.floor((Math.random() * 100) + 1);
    number2.innerHTML= Math.floor((Math.random() * 100) + 1);
    scores++;
}
if(window.location.reload){
    number1.innerHTML= Math.floor((Math.random() * 100) + 1);
    number2.innerHTML= Math.floor((Math.random() * 100) + 1);
}
var greater = document.getElementById('greater-than')
var lower = document.getElementById('lesser-than')
var equal = document.getElementById('equal-to')
equal.onclick = answer3
greater.onclick = answer1
lower.onclick = answer2
function answer3(){

    if(number1.innerHTML==number2.innerHTML){
        scoreinc()
    }
    else(
        gameover()
    )
    scores+1
}
function answer2(){

    if(number1.innerHTML<number2.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
    scores+1
}
function answer1(){
    if(number1.innerHTML> number2.innerHTML){
    scoreinc()
    }
    else{
    gameover()
    }
    scores+1

}
function scoreinc(){
  t=5;
}

function runTimer()
{
    timer.innerHTML=t;
    if(t==0) {
        clearInterval(abcd)
        gameover()
    }
    t--;
    sessionStorage.setItem("scores",scores)

}

let abcd=setInterval(runTimer,1000)
function gameover(){
    
    location.href=('gameover.html')
}