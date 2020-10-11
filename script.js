//Global variables:
let gamesPlayed = 0; //running tally of number of games played
let turnsPlayed = 0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress
let squarePlayed = false; //Used to validate whether a tile was already selected
let whoseTurn = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]; //keeps track of whose turn. X always begins a new game.
let choices = []; //choices, by player, which will be used to compare against winners
let winners = [ [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,5,8], [3,4,5], [6,7,8], [2,4,6]]; //winning combinations of tiles by index.
let win = false; //Used later to determine on last turn if the game is a tie

let xWins = 0; //Number of games X won
let oWins = 0; //Number of games O won

function startGame() {
  for (let i = 0; i < document.querySelectorAll(".tttbox").length; i++) {
    document.querySelectorAll(".tttbox")[i].style.background = "white"; //Resets the color of all tiles to white
  }
  gameInProgress = true; //Confirms game is in progress; clicking on New Game produces error
  turnsPlayed = 0; //resets the turn count
  choices = []; //Initialize the choices on new game
  win=false;
  displayCounter();
}

function takeTurn(selectedButton, pos) { //Takes in the ID and position of the tile.
  //Takes id of selected tile and updates the color appropriately
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
          recordTurn("x", pos); //Changes the color of the tile to be that of what X selected
          break;

        case "o":
          selectedButton.setAttribute("style", "background: rgb(0, 0, 255);");
          recordTurn("o", pos); //Changes the color of the tile to be that of what O selected
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
    alert('Cannot select this tile.');
    return false;
  } else return true;
}

function recordTurn(player, pos) {
 
    switch (player) {
    case "x":
     choices[pos] = player; //Updates the choices array with X at the position of the tile
     validateWinner();
      break;

    case "o":
      choices[pos] = player; //Updates the choices array with O at the position of the tile
      validateWinner();
      break;
  }
}

function validateWinner() { //Compares player's choices to winning combos and determines if there's a winner or, if no matches, a tie
 //   console.log(turnsPlayed, choices, win)
 
  

 if(turnsPlayed<4){
      //Do nothing since there haven't been enough turns played yet to determine a winner
  }
  else{
       winners.forEach((path) =>{ //Looks at each combo in winning array. "Path" represents a winning path
           //Look at the value of the first winner element and use that to determine the position of the player choice and get its value, which will be either X or O.
           //For the next two values in that winners element, use those values to find the positions to look at the players choice array.  If they are both the same as the first position (either X or O), then that player made a winning combination.
           if(choices[path[0]] 
            && choices[path[0]] === choices[path[1]]
            && choices[path[0]] === choices[path[2]])
            finishGame("win");
            
       })
    }
       
 if(turnsPlayed>=8 && !win){ //If all turns have been played and a winner has not been determined
      finishGame("tie"); //Consider the game a tie.
  }
  else {}
}

function finishGame(result) {
  switch (result) {
    case "win":
      alert(`Game over. ${whoseTurn[turnsPlayed].toUpperCase()} wins!`); //Notifies if "X" or "O" wins
      win=true; //set win condition to be true as it's not a tie
      
      if(whoseTurn[turnsPlayed] == 'x'){ //If X wins, increment X's win counter.
          xWins++;
      }
      else {oWins++;} //If O wins, increment O's win counter.
      break;

    case "tie":
      alert(`Tie game`); //Notifies it's a tie game
      break;
  }
  gameInProgress = false; //Resets the game flag to false so that a new game can begin
  gamesPlayed++; //Increments the number of games played.
  displayCounter();
  
}

function displayCounter(){
    document.querySelector('#xWins').innerText=`X has won ${xWins} games.`;
    document.querySelector('#oWins').innerText=`O has won ${oWins} games.`;
    document.querySelector('#gamesPlayed').innerText=`${gamesPlayed} games have been played.`;
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


