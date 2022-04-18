var guessList = [];
let randomNumber;

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
}

function playGame(){
    let guess = document.getElementById("number-guess").value;
    saveGuessHistory(guess);
    displayHistory();
    displayResult(guess);
}

function initGame(){
    randomNumber = Math.floor(Math.random()*100) + 1;
    guessList = [];
    displayHistory();
    resetResultContent();
}

function resetResultContent(){
    document.getElementById("result").innerHTML = "";
}
  

function displayResult(guess){
    if(Math.abs(randomNumber-guess)>0 &&  Math.abs(randomNumber-guess)<=2)
    {
        showAlmostThere();
    }
    else if(randomNumber<guess)
    {
        showNumberAbove();
    }
    else if(randomNumber>guess)
    {
        showNumberBelow();
    }
    else{
        showYouWon();
    }
}

function saveGuessHistory(guess) {
    guessList.push(guess);
}

function displayHistory() {
    let index = guessList.length-1;
    let list = "<ul class='list-group'>"
    while(index >= 0){
      list += 
        "<li class='list-group-item'>" + 
        "You guessed " + guessList[index] +
        "</li>";
      index--;
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showAlmostThere(){
    const text = "Hang on, you're almost there!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}

function showYouWon(){
    const text = "Awesome job, you got it!"
    let dialog = getDialog('won', text)
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
    const text = "Your guess is too high!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}
  
  function showNumberBelow(){
    const text = "Your guess is too low!"
    let dialog = getDialog('warning', text)
    document.getElementById("result").innerHTML = dialog;
}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}
