let wholeThing = (function TicTacToe (){
    const startGameDialog = document. getElementById("start-dialog")
    const gameEndDialog = document.getElementById('end-dialog');
    const boardTiles= document.querySelectorAll(".board-tile")
    const restartButton =document.getElementById('restart-button')
    const closeButton=document.getElementById("close-button")
    const startButton=document.getElementById("start-button")
    const player1Instructions=document.getElementById("player1")
    const player2Instructions=document.getElementById("player2")
    const playerNames=document.querySelectorAll("form input")
    const newGameButton=document.getElementById('new-players')
    const scorePlayer1=document.querySelector('#scores p:nth-child(3)')
    const scorePlayer2=document.querySelector('#scores p:nth-child(5)')
    const scoreName1=document.querySelector('#scores p:nth-child(2)')
    const scoreName2=document.querySelector('#scores p:nth-child(4)')
    const startOverButton=document.getElementById('start-over')
    const gameWinner=document.getElementById('winner')
    const resetScoresButton=document.getElementById('reset-button')

    let player1=createPlayer('Manuel','X','red')
    let player2=createPlayer('Constanza','O','blue')

    let currentPlayer=player1;
    let roundNumber=0

    function resetScores(){
    player1.score=0;
    player2.score=0;
    }

     window.addEventListener('load',(e)=>{
        startGameDialog.showModal();
    })

    resetScoresButton.addEventListener('click',()=>{
        resetScores();
        updateScores();
    })

    newGameButton.addEventListener('click',()=>{
        startGameDialog.showModal();
        

    })
    startButton.addEventListener("click",()=>{
        player1.name=playerNames[0].value
        player2.name=playerNames[1].value
       player1Instructions.textContent=` ${player1.name}`;
       player2Instructions.textContent=` ${player2.name}`;
       scoreName1.textContent=` ${player1.name}`;
        scoreName2.textContent=` ${player2.name}`;
        resetScores();
        updateScores();
        resetBoard();
        startGameDialog.close();
    })

    startOverButton.addEventListener('click',()=>{
        gameEndDialog.close()
        startGameDialog.showModal()
    })

    boardTiles.forEach((tile,index)=>{
        tile.addEventListener("mouseenter", () => {
            if (tile.textContent==""){
                tile.textContent=currentPlayer.marker
                tile.style.color=currentPlayer.color
            }
        });

        tile.addEventListener("mouseleave", ()=>{
            updateTile(index)
        })

        tile.addEventListener("click",()=>{
            if (Gameboard.boardArray[index] !=="") return
            playRound(currentPlayer,index); 
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


    function createPlayer(name,marker,color){
        return{name,marker,color};
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
        updateTile(position)
        if (checkForWin(Gameboard.boardArray)){
            gameWinner.textContent=` ${player.name} wins!!` 
            currentPlayer.score++
            updateScores()
            console.log(currentPlayer.score)

            gameEndDialog.showModal();
            continueGame=false;
        }

        else if (roundNumber==9 ){
            gameWinner.textContent='It is a tie!!' 
            gameEndDialog.showModal();
        }

    };


    function updateScores(){
        scorePlayer1.textContent=player1.score;
        scorePlayer2.textContent=player2.score;
    }

    function switchPlayer(){
        if (currentPlayer==player1){
            currentPlayer=player2
        }
        else (currentPlayer=player1)
    }

    function resetBoard(){
        currentPlayer=player1
        roundNumber=0
        for (let i = 0; i < Gameboard.boardArray.length; i++) {
            Gameboard.boardArray[i]="";
            updateTile(i);
        }
    }

})();









 








