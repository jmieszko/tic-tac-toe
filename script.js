//Global variables:
let gamesPlayed =0; //running tally of number of games played
let turnsPlayed =0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress
let squarePlayed = false; //Used to validate whether a tile was already selected

let whoseTurn = ['x','o','x','o','x','o','x','o','x'] //keeps track of whose turn. X always begins a new game.
let xChoices = []; //x's choices which will be used to compare against winners
let oChoices = []; //o's choices which will be used to compare against winners


let winners = ['abc', 'def', 'ghi', 'aei', 'ceg', 'adg', 'beh', 'cfi'] //Sorted alphabetically

function startGame(){
    for(let i=0;i<document.querySelectorAll('.tttbox').length; i++){
        document.querySelectorAll('.tttbox')[i].style.background='white';
    }
    gameInProgress = true;
    turnsPlayed = 0;
    xChoices=[];
    oChoices=[];
    console.log("turnsPlayed in startGame()= ", turnsPlayed);
    //Assign playerTurn box color to be for x
}


function takeTurn(selectedButton){ //Takes id of selected tile
    console.log("turnsPlayed in takeTurn() beginning = ", turnsPlayed);
    console.log(gameInProgress);
    if(!gameInProgress){ //Validates that a game has not already started. If a game hasn't started, start a game.
        alert('Click on New Game to start new game');
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
        console.log("turnsPlayed in takeTurn() after switch = ", turnsPlayed);
   turnsPlayed++; 
   console.log("turnsPlayed in takeTurn() after switch = and increment ", turnsPlayed);
}

}

function recordTurn(player, choice){
    console.log("turnsPlayed in recordTurn() beginning = ", turnsPlayed);
switch (player){
    case 'x':
        xChoices[turnsPlayed] = choice;
        xChoices.sort();
        xChoices.length=3;
        console.log("xChoices=", xChoices);
        validateWinner(xChoices);
    break;
    
    case 'o':
        oChoices[turnsPlayed] = choice;
        oChoices.sort();
        oChoices.length=3;
        console.log("oChoices=", oChoices);
        validateWinner(oChoices);
    break;
    
        
}
console.log("turnsPlayed in recordTurn() after switch = ", turnsPlayed);
}

function validateWinner(player){
    console.log("turnsPlayed in validateWinner() beginning = ", turnsPlayed);
    player = player.toString(); //converts player's choices to a string
    player=player.replaceAll(',',''); //removes ',' from player's choices
    
    for(let i=0; i<winners.length; i++){ //compares player's choices to the winning combos array
        if(player==winners[i]){ //if there is a match
            
            finishGame('win'); //proceed to end game with win condition
            break;
        }
        else{      
            if(turnsPlayed>=8){
                finishGame('tie')
              //do nothing and go back to taking a turn
              console.log("turnsPlayed in validateWinner() for else = ", turnsPlayed);
              break;
            }
        }
    }
}

function finishGame(result){
    console.log("turnsPlayed in finishGame() beginning = ", turnsPlayed);

    switch(result){
        case 'win':
            alert(`Game over. ${whoseTurn[turnsPlayed]} wins!`);
            console.log("turnsPlayed in finishGame() if = ", turnsPlayed);
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
    console.log("turnsPlayed in finishGame() before resetting to 0 = ", turnsPlayed);
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

