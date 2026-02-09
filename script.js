
    const gameEndDialog = document.getElementById('end-dialog');
    const boardTiles= document.querySelectorAll(".board-tile")
    const restartButton =document.getElementById('restart-button')
    let currentTile;
    let player1=createPlayer('Manuel','X')
    let player2=createPlayer('Constanza','O')
    let continueGame=true
    let currentPlayer=player1;
    let roundNumber=0

    boardTiles.forEach((tile,index)=>{
        tile.addEventListener("mouseenter", () => {
            if (tile.textContent==""){
                tile.textContent=currentPlayer.marker
            }
        });

        tile.addEventListener("mouseleave", ()=>{
            updateTile(index)
        })

        tile.addEventListener("click",()=>{
            if (Gameboard.boardArray[index] !=="") return
            console.log(Gameboard.boardArray[index])
            playRound(currentPlayer,index);
            console.log(roundNumber)
            switchPlayer() 
        })
    });

    closeButton.addEventListener('click', () => {
    gameEndDialog.close();
    resetBoard();
    });

    restartButton.addEventListener('click',() => {
        resetBoard();
    } )

let Gameboard= (function createGameboard (){
    const boardArray = Array(9).fill("");
    const Gameboard = ()=>{
        return {boardArray}
    } 

    return(Gameboard());
})();


function createPlayer(name,marker){
    return{name,marker};
};


function updateTile(i){
        boardTiles[i].textContent=Gameboard.boardArray[i]
} 



function checkForWin (){
    const winningCombinations = [ 
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    let filteredBoard = array => array.map (index => Gameboard.boardArray[index]);
    let areElementsEqual = array => {
        if (array.some( value=> !value)){
            return false;
        }
        else{
            return array.every(value => value === array[0])
        }}; 
    let isThereaWin = winningCombinations.some(element => 
        areElementsEqual(filteredBoard(element))==true
    );

    return isThereaWin; 
}


function playRound (player,position){
    roundNumber++
    Gameboard.boardArray[position] = player.marker;
    console.log(Gameboard.boardArray)
    updateTile(position)
    if (checkForWin(Gameboard.boardArray)){
        console.log(`Game is over, ${player.name} wins` )
        gameEndDialog.showModal();
        continueGame=false;
    }

    else if (roundNumber==9 ){
        console.log(`Game is over, it is a tie` ) 
        gameEndDialog.showModal();
    }

};


function switchPlayer(){
    if (currentPlayer==player1){
        currentPlayer=player2
    }
    else (currentPlayer=player1)
}

function resetBoard(){
    currentPlayer=player1
    console.log("hey")
    roundNumber=0
    for (let i = 0; i < Gameboard.boardArray.length; i++) {
        Gameboard.boardArray[i]="";
        updateTile(i);
    }
}











 








