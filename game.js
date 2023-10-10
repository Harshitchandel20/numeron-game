// Iteration 2: Generate 2 random number and display it on the screen

const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")

// const greater_Than = document.getElementById("greater-than")
// greater_Than.addEventListener("click", function(){handleOperations(">")})

// const equal_To = document.getElementById("equal-to")
// equal_To.addEventListener("click", function(){handleOperations("=")})



// event delegation method

const buttons = document.getElementById("buttons")
buttons.addEventListener("click",handleOperations)

const timer = document.getElementById("timer")

//Displaying numbers in dom
let num1, num2
displayNumber()

function displayNumber(){
num1 = randomNumber()
num2 = randomNumber()
number1.innerText = num1
number2.innerText = num2
}


//to generate random Number

function randomNumber(){

    return Math.floor(Math.random()*100)+1


}
// Iteration 3: Make the options button functional

let score = 0

function handleOperations(e){
    if(e.target.id=="greater-than" && num1>num2){
        updateScore()
    }else if(e.target.id=="equal-to" && num1==num2){
        updateScore()
    }else if(e.target.id=="lesser-than" && num1<num2){
        updateScore()
    }else{
        gameOver()
    }
}

function updateScore(){
    time = 6
    displayNumber()
    score++
}

// updating score and redirecting to next page
function gameOver(){
    localStorage.setItem("total", score)
    location.href = "gameover.html"
}

// Iteration 4: Build a timer for the game

setInterval(showTime , 1000)

let time = 6
function showTime(){
    if(time==0){
        gameOver()
    }else{
        time--
        timer.innerText = time
    }
}