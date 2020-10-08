//Global variables:
let gamesPlayed =0; //running tally of number of games played
let turnsPlayed =0; //running tally of number of turns in a given game
let gameInProgress = false; //Used to ensure a new game doesn't start when one's already in progress

let whoseTurn = ['x','o','x','o','x','o','x','o','x'] //keeps track of whose turn. X always begins a new game.
let xChoices = []; //x's choices which will be used to compare against winners
let oChoices = []; //o's choices which will be used to compare against winners


let winners = ['abc', 'def', 'ghi', 'aei', 'ceg', 'adg', 'beh', 'cfi'] //Sorted alphabetically

function startGame(){
    gameInProgress = true;
    //Assign playerTurn box color to be for x
}


function takeTurn(selectedButton){ //Takes id of selected tile
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
        
        turnsPlayed++;
        // if(whoseTurn[turnsPlayed]=='x') //
        // {
        //     selectedButton.setAttribute('style','background-color: rgb(230, 210, 182);');
        //     recordTurn('x', selectedButton.id);
        // }
        // else{
        //     selectedButton.setAttribute('style','background-color: rgb(0, 0, 255);');
        //     recordTurn('o', selectedButton.id);
        // }
        //    turnsPlayed++;
   
}

}

function recordTurn(player, choice){
    
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
}

function validateWinner(player){
    player = player.toString();
      
    player=player.replaceAll(',','');
    console.log(player);
    for(let i=0; i<winners.length; i++){
        if(player==winners[i]){
            
            finishGame(player,'win');
            break;
        }
        else{            
        }
    }
    //finishGame(player,'tie');
}

function finishGame(player, result){
    if(result=="win"){
        console.log(`Game over. ${player} wins!`);
    }
    else{
        console.log("Tie game");
    }
    gamesPlayed++;
    turnsPlayed=0;
    gameinProgress=false;
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

