//Global variables:
let gamesPlayed = 0; //running tally of number of games played
let turnsPlayed = 0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress
let squarePlayed = false; //Used to validate whether a tile was already selected
let whoseTurn = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]; //keeps track of whose turn. X always begins a new game.
let choices = []; //x's choices which will be used to compare against winners
let winners = [ [0,1,2], [0,4,8], [0,3,6], [1,4,7],   [2,5,8],   [3,4,5],   [6,7,8],   [2,4,6]]; //o's choices which will be used to compare against winners


function startGame() {
  for (let i = 0; i < document.querySelectorAll(".tttbox").length; i++) {
    document.querySelectorAll(".tttbox")[i].style.background = "white";
  }
  gameInProgress = true;
  turnsPlayed = 0; //resets the turn count
  xChoices = []; //Initialize the choices on new game
  //oChoices = []; //Initialize the choices on new game
  // console.log("turnsPlayed in startGame()= ", turnsPlayed);
  //Assign playerTurn box color to be for x
}

function takeTurn(selectedButton, pos) {
  //Takes id of selected tile and updates the color appropriately
  //console.log(selectedButton.id);
  if (validateTile(selectedButton)) {
    //If the selected tile wasn't previously selected, do the following

    if (!gameInProgress) {
      //Validates that a game has not already started. If a game hast started, alert the user.
      alert("Game is over.  Click on New Game to start.");
      return;
    } else {
      //If a game has already started

      switch (whoseTurn[turnsPlayed]) {
        case "x":
          selectedButton.setAttribute(
            "style",
            "background: rgb(230, 210, 182);"
          );
          recordTurn("x", selectedButton.id, pos);
          break;

        case "o":
          selectedButton.setAttribute("style", "background: rgb(0, 0, 255);");
          recordTurn("o", selectedButton.id, pos);
          break;
      }

      turnsPlayed++; //Increment this to ensure that the turn was taken
    }
  } else {
  } //If the tile was previously selected, then do nothing, not even increment the turn counter
}

function validateTile(tile) {
  //Ensures that the selected tile wasn't previously selected
  
  if (tile.style.background != "white") {
    alert('Cannot select this tile.  Choose another or click "New Game."');
    return false;
  } else return true;
}

function recordTurn(player, choice, pos) {
 // console.log(player,choice,posX,posY,xChoices)
  switch (player) {
    case "x":
      choices[pos] = player;
      // if(choice=='e') middleSquare=true;
     // console.log("xChoices=", xChoices);
     // xChoices.sort();
      //xChoices.length=3;
      console.log("Choices=", choices);
      validateWinner();
      break;

    case "o":
      choices[pos] = player;
      //  if(choice=='e') middleSquare=true;
     // console.log("oChoices=", oChoices);
     // oChoices.sort();
      // oChoices.length=3;
      //console.log("oChoices=", oChoices);
      validateWinner(choices);
      break;
  }
  //console.log("turnsPlayed in recordTurn() after switch = ", turnsPlayed);
}

function validateWinner() {
    console.log(choices)
    let result;
   // let matches;
  //Compares player's choices to winning combos and determines if there's a winner or, if no matches, a tie

 if(turnsPlayed<4){
      //Do nothing since there haven't been enough turns played yet to determine a winner
  }
  else{
       winners.forEach((path) =>{
           console.log(winners, path);
           if(choices[path[0]]
            && choices[path[0]] === choices[path[1]]
            && choices[path[0]] === choices[path[2]])
            finishGame("win");
       })
    }
       
//       for(let j=0;j<winnersEdge.length;j++){
//           if(playerNoE==winnersEdge[j]){
//               finishGame("win");
//           }
//           else {}
//       }

//   }
//if(matches == 3) finishGame("win");

if(result=="win"){
    finishGame("win");
}
  if(turnsPlayed>=8){
      finishGame("tie");
  }
  else {}
}

function finishGame(result) {
  //  console.log("turnsPlayed in finishGame() beginning = ", turnsPlayed);

  switch (result) {
    case "win":
      alert(`Game over. ${whoseTurn[turnsPlayed]} wins!`);
      //         console.log("turnsPlayed in finishGame() if = ", turnsPlayed);
      break;

    case "tie":
      alert(`Tie game`);
      console.log("tie game");
      break;
  }
  // if(result=="win"){
  //     alert(`Game over. ${whoseTurn[turnsPlayed]} wins!`);
  //     console.log("turnsPlayed in finishGame() if = ", turnsPlayed);
  // }
  // else{
  //     console.log("Tie game");
  // }
  //  console.log("turnsPlayed in finishGame() before resetting to 0 = ", turnsPlayed);
  gamesPlayed++; //increments played Games counter
  gameInProgress = false;
}

//When New Game button is selected, a new game is initiated
document.querySelector(".new").addEventListener("click", () => {
  if (gameInProgress == true) {
    alert("Game already in progress...finish before starting new");
  } else {
    startGame();
  }
});

//Below initiate the sequence of events when a particular tile is clicked:

// const boxes = document.querySelectorAll(".tttbox");
// boxes.forEach(function (box) {
//   box.addEventListener("click", function () {
//     takeTurn(this);
//   });
// });


 document.querySelector("#a").addEventListener("click", () => {
   takeTurn(a,0);
 });
 document.querySelector("#b").addEventListener("click", () => {
   takeTurn(b,1);
 });
 document.querySelector("#c").addEventListener("click", () => {
   takeTurn(c,2);
 });
 document.querySelector("#d").addEventListener("click", () => {
   takeTurn(d,3);
 });
 document.querySelector("#e").addEventListener("click", () => {
   takeTurn(e,4);
 });
 document.querySelector("#f").addEventListener("click", () => {
   takeTurn(f,5);
 });
 document.querySelector("#g").addEventListener("click", () => {
   takeTurn(g,6);
 });
 document.querySelector("#h").addEventListener("click", () => {
   takeTurn(h,7);
 });
 document.querySelector("#i").addEventListener("click", () => {
   takeTurn(i,8);
 });

// console.log(playArray);

// for(let i=0;i<testArray.length;i++){
//     if(testArray[i].length==3)
//   console.log("winner", testArray[i]);
// }


// console.log(document.querySelectorAll('.tttbox'))


