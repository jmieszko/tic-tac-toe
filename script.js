//Global variables:
let gamesPlayed = 0; //running tally of number of games played
let turnsPlayed = 0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress
let squarePlayed = false; //Used to validate whether a tile was already selected
let whoseTurn = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]; //keeps track of whose turn. X always begins a new game.
let choices = []; //choices, by player, which will be used to compare against winners
let winners = [ [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,5,8], [3,4,5], [6,7,8], [2,4,6]]; //winning combinations of tiles by index.
let win = false; //Used later to determine on last turn if the game is a tie
let playerTurn=document.querySelector(`.messageBox`); //Used to update the color on the Player Turn box
let xWins = 0; //Number of games X won
let oWins = 0; //Number of games O won
let xColor="rgb(255, 105, 180)"; //Default color of X tiles
let oColor = "rgb(193, 154, 107)"; //Default color of O tiles

function startGame() {
  const boxes = document.querySelectorAll(".tttbox");
  boxes.forEach(box => {
  box.style.background = "white"; //Resets the color of all tiles to white
    box.innerText=""; //Resets the text of all tiles to be blank
  });

  gameInProgress = true; //Confirms game is in progress; clicking on New Game produces error
  turnsPlayed = 0; //resets the turn count
  choices = []; //Initialize the choices on new game
  win=false; //Initialize the win situation to be false
  playerTurn.setAttribute("style",`background: ${xColor}`);
  playerTurn.innerHTML=`Player Turn:<br>${whoseTurn[turnsPlayed].toUpperCase()}`;
  
}

function takeTurn(selectedButton) { //Uses the information about the selected tile.
    let pos = selectedButton.id; //Makes the tile ID its position.

  //Takes id of selected tile and updates the color appropriately
    if (validateTile(selectedButton)) {
    //If the selected tile wasn't previously selected, do the following

    if (!gameInProgress) {
      //Validates that a game has not already started. If a game hast started, put a message.
      playerTurn.setAttribute("style",`background: red`);
      playerTurn.innerHTML=`Click on New Game to start.`;
  
      return;
    } else {
      //If a game has already started

      switch (whoseTurn[turnsPlayed]) {
        case "x":
          selectedButton.setAttribute("style", `background: ${xColor}`);
          selectedButton.innerText="X";
          
          if(turnsPlayed<8){ //If the number of turns exceeds 9, then this produces an error
          playerTurn.setAttribute("style",`background: ${oColor}`);
          playerTurn.innerHTML=`Player Turn:<br>${whoseTurn[turnsPlayed+1].toUpperCase()}`; //Sets message box it's O's turn
          }
          
          recordTurn("x", pos); //Changes the color of the tile to be that of what X selected
          break;

        case "o":
        
          selectedButton.setAttribute("style", `background: ${oColor}`);
          selectedButton.innerText="O";   
          
          if(turnsPlayed<8){
                playerTurn.setAttribute("style",`background: ${xColor}`);
                playerTurn.innerHTML=`Player Turn:<br>${whoseTurn[turnsPlayed+1].toUpperCase()}`; //Sets message box it's X's turn
          }
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
    playerTurn.setAttribute("style",`background: red`);
  playerTurn.innerHTML=`Cannot select this tile`;// alert('Cannot select this tile.');
    return false;
  } else return true;
}

function recordTurn(player, pos) {
 
    switch (player) {
    case "x":
     choices[pos] = player; //Updates the choices array with X at the position of the tile
     break;

    case "o":
      choices[pos] = player; //Updates the choices array with O at the position of the tile
      break;
  }
  validateWinner();
}

function validateWinner() { //Compares player's choices to winning combos and determines if there's a winner or, if no matches, a tie
 
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
      if(whoseTurn[turnsPlayed]=='x'){
        playerTurn.setAttribute("style",`background: ${xColor}`);
      }
      else {playerTurn.setAttribute("style",`background: ${oColor}`);}
  playerTurn.innerHTML=`Game over. ${whoseTurn[turnsPlayed].toUpperCase()} wins!`;
   
      win=true; //set win condition to be true as it's not a tie
      
      if(whoseTurn[turnsPlayed] == 'x'){ //If X wins, increment X's win counter.
          xWins++;
      }
      else {oWins++;} //If O wins, increment O's win counter.
      break;

    case "tie":
      playerTurn.setAttribute("style",`background: rgb(0,255,255)`);
      playerTurn.innerHTML=`Tie game<br>No more turns allowed`;
      break;
  }
  gameInProgress = false; //Resets the game flag to false so that a new game can begin
  gamesPlayed++; //Increments the number of games played.
  displayCounter();
  
}

function displayCounter(){
  let ties=gamesPlayed -xWins - oWins //Calculate the ties used in the stats at bottom of screen
    document.querySelector('#xWins').innerHTML=`X: &nbsp ${xWins}`;
    document.querySelector('#ties').innerHTML=`Ties: ${ties}`;
    document.querySelector('#oWins').innerHTML=`O: &nbsp ${oWins}`;
   
}

//When New Game button is selected, a new game is initiated
document.querySelector(".new").addEventListener("click", () => {
  if (gameInProgress == true) {
    playerTurn.setAttribute("style",`background: red`);
  playerTurn.innerHTML=`Game already in progress...finish before starting new.`;
  } else {
    startGame();
  }
});

//Below initiate the sequence of events when a particular tile is clicked:

const boxes = document.querySelectorAll(".tttbox");
boxes.forEach(function (box) {
box.addEventListener("click", function () {
takeTurn(this);
});
});

//Initialization of certain features at initial page load
displayCounter(); //Called here so that when the page loads, the counters are already displaying.
playerTurn.setAttribute("style",`background: "white"`); //Turn box is white with instructions to begin playing
playerTurn.innerHTML=`Press New Game<br>to start new game`;