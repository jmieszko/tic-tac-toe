//Global variables:
let gamesPlayed =0; //running tally of number of games played
let turnsPlayed =0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress
let squarePlayed = false; //Used to validate whether a tile was already selected

let whoseTurn = ['x','o','x','o','x','o','x','o','x'] //keeps track of whose turn. X always begins a new game.
let xChoices = []; //x's choices which will be used to compare against winners
let oChoices = []; //o's choices which will be used to compare against winners


let winners = ["abc", "adg", "aei", "beh", "ceg", "cfi", "def", "ghi"] //Sorted alphabetically


function startGame(){
    for(let i=0;i<document.querySelectorAll('.tttbox').length; i++){
        document.querySelectorAll('.tttbox')[i].style.background='white';
    }
    gameInProgress = true;
    turnsPlayed = 0; //resets the turn count
    xChoices=[]; //Initialize the choices on new game
    oChoices=[]; //Initialize the choices on new game
   // console.log("turnsPlayed in startGame()= ", turnsPlayed);
    //Assign playerTurn box color to be for x
}


function takeTurn(selectedButton){ //Takes id of selected tile
    // console.log(document.querySelector(`#${selectedButton}`));
  //  console.log("turnsPlayed in takeTurn() beginning = ", turnsPlayed);
    console.log(gameInProgress);
    if(!gameInProgress){ //Validates that a game has not already started. If a game hasn't started, start a game.
        alert('Game is over.  Click on New Game to start.');
        return;
    } 
    else{ //If a game has already started

        switch(whoseTurn[turnsPlayed]){
            case 'x':

                selectedButton.setAttribute('style','background-color: rgb(230, 210, 182);');
                recordTurn('x', selectedButton.id);
            break;

            case 'o':
                selectedButton.setAttribute('style','background-color: rgb(0, 0, 255);');
                recordTurn('o', selectedButton.id);
            break;
        }
   //     console.log("turnsPlayed in takeTurn() after switch = ", turnsPlayed);
   turnsPlayed++; 
  // console.log("turnsPlayed in takeTurn() after switch = and increment ", turnsPlayed);
}

}

function recordTurn(player, choice){
//console.log("turnsPlayed in recordTurn() beginning = ", turnsPlayed);
switch (player){
    case 'x':
        xChoices[turnsPlayed] = choice;
        console.log("xChoices=", xChoices);
        xChoices.sort();
        //xChoices.length=3;
        console.log("xChoices=", xChoices);
        validateWinner(xChoices);
    break;
    
    case 'o':
        oChoices[turnsPlayed] = choice;
        console.log("oChoices=", oChoices);
        oChoices.sort();
       // oChoices.length=3;
        console.log("oChoices=", oChoices);
        validateWinner(oChoices);
    break;
    
        
}
//console.log("turnsPlayed in recordTurn() after switch = ", turnsPlayed);
}

function validateWinner(player){ //Compares player's choices to winning combos and determines if there's a winner or, if no matches, a tie
   // console.log("turnsPlayed in validateWinner() beginning = ", turnsPlayed);
    player = player.toString(); //converts player's choices to a string
    player=player.replaceAll(',',''); //removes ',' from player's choices
    let play=player.slice(0,2); //gets first two choices from player's choice list.
    console.log("Play before for= ", `${play}`);
    // console.log("xC= ",xChoices, '\n', "oC= ", oChoices);
    // console.log(player);
    for(let k=1;k<player.length;k++){
        console.log(player.slice(k))
    }

    for(let i=0; i<winners.length; i++){ //compares player's choices to the winning combos array
    // console.log("Play=",play);
     console.log(winners[i].toString().slice(2))
        if(play===winners[i].slice(0,2)){ //if there is a match of at least the first two choices to the first two choices of a winner
            console.log("Play= ",play, "winners= ", winners[i], "player=",player);
            for(let j=2;j<player.length; j++){
                console.log("i=", i, "j=", j, "Player slice=",player.slice(j,j+1), "Winners i slice =", winners[i].toString().slice(2));//.toString().slice(2));
                if(player.slice(j,j+1)==winners[i].toString().slice(2)){
                    finishGame('win'); //proceed to end game with win condition
            break;
                }
            }
            
        }
        else{      
            if(turnsPlayed>=8){
                finishGame('tie')
              //do nothing and go back to taking a turn
   //           console.log("turnsPlayed in validateWinner() for else = ", turnsPlayed);
              break;
            }
        }
    }
}

function finishGame(result){
  //  console.log("turnsPlayed in finishGame() beginning = ", turnsPlayed);

    switch(result){
        case 'win':
            alert(`Game over. ${whoseTurn[turnsPlayed]} wins!`);
   //         console.log("turnsPlayed in finishGame() if = ", turnsPlayed);
            break;
        
        case 'tie':
            alert(`Tie game`);
            console.log('tie game');
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
    gameInProgress=false;
}

//When New Game button is selected, a new game is initiated
document.querySelector('.new').addEventListener('click',() =>{
    if(gameInProgress==true){
        alert('Game already in progress...finish before starting new');
    }
    else{
        startGame();
    }
})

//Below initiate the sequence of events when a particular tile is clicked:
document.querySelector('#a').addEventListener('click',() =>{takeTurn(a);});
document.querySelector('#b').addEventListener('click',() =>{takeTurn(b);});
document.querySelector('#c').addEventListener('click',() =>{takeTurn(c);});
document.querySelector('#d').addEventListener('click',() =>{takeTurn(d);});
document.querySelector('#e').addEventListener('click',() =>{takeTurn(e);});
document.querySelector('#f').addEventListener('click',() =>{takeTurn(f);});
document.querySelector('#g').addEventListener('click',() =>{takeTurn(g);});
document.querySelector('#h').addEventListener('click',() =>{takeTurn(h);});
document.querySelector('#i').addEventListener('click',() =>{takeTurn(i);});

