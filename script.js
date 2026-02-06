let Gameboard= (function createGameboard (){
    const boardArray = new Array (9);
    const Gameboard = ()=>{
        return {boardArray}
    } 

    return(Gameboard());
})();


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




const array1=[3,4,5];


function createPlayer(name,marker){
    return{name,marker};
};


function playRound (player,position){

    Gameboard.boardArray[position] = player.marker;
    if (checkForWin(Gameboard.boardArray)){
        console.log(`Game is over, ${player.marker} wins` )
        return 'Game is over';
    }

    else{
        return Gameboard;
    }
};



let player1=createPlayer('Manuel','X')
let player2=createPlayer('Constanza','O')


function getCurrentPlayer (currentRound,player1,player2){
    if (currentRound%2 == 0) {
        currentPlayer = player1;
        
    }  

    else{
        currentPlayer=player2;
    }

    return currentPlayer;
}

function playGame(player1,pĺayer2,Gameboard){
    let roundCounter = 0;
    let currentPlayer;



    getCurrentPlayer(roundCounter,player1,player2)
    playRound(currentPlayer, Gameboard)
}

playRound(player1,4)
console.log(Gameboard.boardArray)


playRound(player2,1)
console.log(Gameboard.boardArray)

playRound(player1,5)
console.log(Gameboard.boardArray)

playRound(player2,8)
console.log(Gameboard.boardArray)

playRound(player1,6)
console.log(Gameboard.boardArray)

playRound(player2,7)
console.log(Gameboard.boardArray)

playRound(player1,2)
console.log(Gameboard.boardArray)










 








