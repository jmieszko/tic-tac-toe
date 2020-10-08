//Global variables:
let gamesPlayed =0; //running tally of number of games played
let turnsPlayed =0; //running tally of number of turns in a given game
let whoseTurn = 'x' //keeps track of whose turn. X always begins a new game
let gameInProgress = false; //


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
    
   selectedButton.setAttribute('style','background-color: rgb(230, 210, 182);');
   turnsPlayed++;
    console.log(`${selectedButton.id} works with ${turnsPlayed} games played!`)

    if(turnsPlayed=='9'){
        finishGame();
    }
    else{

    }
    //return turnsPlayed;
}

function finishGame(){
    console.log('game over');
    gamesPlayed++;
}
// const buttonA=document.querySelector("#a");
// const buttonB=document.querySelector("#b");
// const buttonC=document.querySelector("#c");
// const buttonD=document.querySelector("#d");
// const buttonE=document.querySelector("#e");
// const buttonF=document.querySelector("#f");
// const buttonG=document.querySelector("#g");
// const buttonH=document.querySelector("#h");
// const buttonI=document.querySelector("#i");

//Below initiate the sequence of events when a particular tile is clicked:
document.querySelector('#a').addEventListener('click',() =>{takeTurn(a);});
document.querySelector('#b').addEventListener('click',() =>{takeTurn(b);});
document.querySelector('#c').addEventListener('click',() =>{takeTurn(c);});
document.querySelector('#d').addEventListener('click',() =>{takeTurn(d);});
document.querySelector('#e').addEventListener('click',() =>{takeTurn(e);});
document.querySelector('#f').addEventListener('click',() =>{takeTurn(f);});
document.querySelector('#g').addEventListener('click',() =>{takeTurn(g);});
document.querySelector('#h').addEventListener('click',() =>{takeTurn(h);})
document.querySelector('#i').addEventListener('click',() =>{takeTurn(i);});