//global variables
    
    var winsCounter = 0;
    var lossesCounter = 0;
    var userScore = 0;
    var generatedNumber = 0;
    var crystalNumber = [];
    


//on page load
$(document).ready(function(){

$('#wins').text(winsCounter);
$('#losses').text(lossesCounter);

//Creates random number when page loads
function getNumber() {

    var minNumber = 19;
    var maxNumber = 120;
    generatedNumber = Math.floor(Math.random () * (maxNumber + 1) + minNumber);
    $('#generatedNumber').html(generatedNumber);
}
getNumber();

//Generate random number 1-12 and push into array
var crystalNumber = [];
while(crystalNumber.length < 4){
    var r = Math.floor(Math.random() * 12) + 1;
    if(crystalNumber.indexOf(r) === -1) crystalNumber.push(r);
}
console.log(crystalNumber);

//Reset Game
function reset (){
    crystalNumber = [];
    getNumber ();
    for (var i = 0; i<4; i++){
        crystalNumber.push(Math.floor(Math.random() * 12)+1);
        }
        
        console.log(crystalNumber);
    userScore=0;
    $('#userScore').text(userScore);
}

//display on Wins
function userWin (){
    winsCounter++;
    $('#wins').text(winsCounter);
    reset();
}

//display on Losses
function userLose (){
    lossesCounter++;
    $('#losses').text(lossesCounter);
    reset();
}

//Generate click events for each crystal button
$('#crystal1').on('click', function (){
    userScore = userScore + crystalNumber[0];
    console.log("New Userscore= " + userScore);
    $('#userScore').text(userScore);
        //Evaluates win/lose condition
        if(userScore === generatedNumber){
            userWin();
        }else if (userScore > generatedNumber){
            userLose();
        }
})

$('#crystal2').on('click', function (){
    userScore = userScore + crystalNumber[1];
    console.log("New Userscore= " + userScore);
    $('#userScore').text(userScore);
        //Evaluates win/lose condition
        if(userScore === generatedNumber){
            userWin();
        }else if (userScore > generatedNumber){
            userLose();
        }
})

$('#crystal3').on('click', function (){
    userScore = userScore + crystalNumber[2];
    console.log("New Userscore= " + userScore);
    $('#userScore').text(userScore);
        //Evaluates win/lose condition
        if(userScore === generatedNumber){
            userWin();
        }else if (userScore > generatedNumber){
            userLose();
        }
})

$('#crystal4').on('click', function (){
    userScore = userScore + crystalNumber[3];
    console.log("New Userscore= " + userScore);
    $('#userScore').text(userScore);
        //Evaluates win/lose condition
        if(userScore === generatedNumber){
            userWin();
        }else if (userScore > generatedNumber){
            userLose();
        }
})

})