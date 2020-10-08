//Global variables:
let gamesPlayed =0; //running tally of number of games played
let turnsPlayed =0; //running tally of number of turns in a given game
let whoseTurn = ['x','o','x','o','x','o','x','o','x'] //keeps track of whose turn. X always begins a new game.
let xChoices = [];
let oChoices = [];

let gameInProgress = false; //
let winners = ['abc', 'def', 'ghi', 'aei', 'ceg', 'adg', 'beh', 'cfi'] //Sorted alphabetically



//When New Game button is selected, a new game is initiated
document.querySelector('.new').addEventListener('click',() =>{
    if(gameInProgress==true){
        alert('Game already in progress...finish before starting new');
    }
    else{
        startGame();
    }
})

function startGame(){
    gameInProgress = true;
}


function takeTurn(selectedButton){
    
    if(!gameInProgress){
        //alert('Click on New Game to start');
        startGame();
        //Alternatively, run startGame();
        return;
    }
    else{

        if(whoseTurn[turnsPlayed]=='x')
        {
            selectedButton.setAttribute('style','background-color: rgb(230, 210, 182);');
            //recordTurn(x, selectedButton.id);
        }
        else{
            selectedButton.setAttribute('style','background-color: rgb(0, 0, 255);');
            //recordTurn(o, selectedButton.id);
        }
   turnsPlayed++;
   
    console.log(`${selectedButton.id} works with ${turnsPlayed} turns played!`)

    if(turnsPlayed>='9'){
        finishGame();
    }
    else{

    }
    //return turnsPlayed;
}

}

function finishGame(player){
    console.log(`Game over. ${player} wins!`);
    gamesPlayed++;
    turnsPlayed=0;
}

function recordTurn(player, choice){
switch (player){
    case 'x':
        xChoice[turnsPlayed] = choice;
        xChoice.sort();
        validateWinner(xChoice);
    break;
    
    case 'o':
        oChoice[turnsPlayed] = choice;
        oChoice.sort();
        validateWinner(oChoice);
    break;
    
        
}
}

function validateWinner(player){
    for(let i=0; i<winners.length; i++){
        if(player==winners[i]){
            finishGame(player);
        }
        else{}
    }
}

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

