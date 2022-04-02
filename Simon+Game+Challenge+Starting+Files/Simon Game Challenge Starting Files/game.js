var buttonColors =["red", "blue", "green", "yellow"];



function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

 var    randomChosenColor=buttonColors[randomNumber];
 console.log(randomChosenColor);
}
nextSequence();
