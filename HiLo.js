var selectednumber;
var userinput;
var guessnumber;
var userName;

function HiLoGame(){
  selectednumber = Math.random()*100;
  selectednumber = Math.round(selectednumber);
  if (selectednumber == 0) {
    selectednumber = Math.random()*100;
  }
  userName = prompt("What's your name?");
  userinput = prompt("Please guess a number between 1 and 100!");

guessnumber = 1;
while (guessnumber < 7){
    if (userinput > selectednumber) {
      alert ("Too high!");
      userinput = prompt("Try again.");
    }
    if (userinput < selectednumber) {
      alert("Too low!");
      userinput = prompt("Try again.");
    }
    guessnumber = guessnumber + 1;

    if (isNaN(userinput)){
      userinput = prompt("That wasn't a number! Try again.");
    }

    }

  if (userinput == selectednumber) {
    alert("You win, " + userName + "!");
  }
  if (guessnumber == 7){
    alert("Game Over!");
  }
}
