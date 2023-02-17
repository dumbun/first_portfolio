
//* storage 
let userClickedPattern = []
let gamePattern = []

let level = 0

let buttonColours = ["red", "blue", "green", "yellow"]
let started = false

//* sounds 

var green = new Audio("sounds/green.mp3")
var red = new Audio("sounds/red.mp3")
var blue = new Audio("sounds/blue.mp3")
var yellow = new Audio("sounds/yellow.mp3")
var wrong = new Audio("sounds/wrong.mp3")

function sounds(randomChosenColour) {
    switch (randomChosenColour) {
        case "blue": blue.play()
            break
        case "red": red.play()
            break
        case "yellow": yellow.play()
            break
        case "green": green.play()
            break
            defalt: console.log("none")
    }
}


//* random function 

function nextSequence() {
    userClickedPattern = [] //// which changes every time because we need to validate every user input
    let random = Math.floor(Math.random() * 4)
    level++
    $("h1").text(`Level ${level}`)

    let randomChosenColour = String(buttonColours[random])

    gamePattern.push(randomChosenColour)  //* pushing the random choosing color into the game pattern arrey for validating 

    // let button = document.getElementById(randomChosenColour) //* js DOM MANIPULATION
    let button = $(`#${randomChosenColour}`)   //* jQUERY 

    button.fadeOut(100).fadeIn(100)
    console.log(randomChosenColour)

    sounds(randomChosenColour)


    console.log(gamePattern)

}

//// checking the inputes 

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }

    } else {
        wrong.play()
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any key to Restart")
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)
        startOver()

        console.log("wrong");

    }


}


//* to restart the game  

function startOver() {
    level = 0
    gamePattern = []
    started = false
}




//* user input 

$(".btn").click(function (e) {

    sounds(userChosenColor)
    let userChosenColor = e.target.id
    userClickedPattern.push(userChosenColor)
    animatePress(e.currentTarget)
    checkAnswer(userClickedPattern.length - 1)

});

function animatePress(currentColour) {
    currentColour.classList.add("pressed")
    setTimeout(() => {
        currentColour.classList.remove("pressed")
    }, 100)
}

//* 

$(document).keydown(function () {

    if (started == false) {
        nextSequence()
        started = true
    }


});
