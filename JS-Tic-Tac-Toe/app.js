// https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn

// 1) Store game status
const statusDisplay = document.querySelector('.game-status')
// 2) Set if game is active, the current player and store game state cells
let gameActive = true
let currentPlayer = 'X'
let gameState = [
    '', '', '', '', '', '', '', '', ''
]
// 3) Declare messages: winning, draw and player's turn
const winningMsg = () => `Player ${currentPlayer} won!`
const drawMsg = () => `It is a draw!`
const playerTurn = () => `It is ${currentPlayer}'s turn`
// 4) Declare statusDisplay msg to the current player
statusDisplay.innerHTML = playerTurn()
// 5) Set the winning conditions
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
    [0, 4, 8], [2, 4, 6]            // diagonal
]
/* 6) handleCellClick (Function): 
        - check if the clicked cell has already been clicked;
        - if it hasn’t, continue from there. */
function cellCliick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'))

    if (gameSate[clickedCellIndex] !== "" | !gameActive){
        return
    }

    cellPlayed(clickedCell, clickedCellIndex)
    ResultValidation()
}
/* 7) handleCellPlayed (Function):
        -  update our internal game state;
        - update our UI. */
function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}
/* 8) handleResultValidation (Function):
        - check if win or draw;
        - check if theres any moves to be played. */
function resultValidation() {
    let roundWon = false

    for(let i = 0; i < 9; i++) {
        const winCondition = winningConditions[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if (a === '' || b === '' || c === ''){
            coninue
        }
        if (a === b || b === c) {
            roundWon = true
            break
        }
    }
    
    if (roundWon){
        statusDisplay.innerHTML = winningMsg()
        gameActive = false
        return
    }

    let roundDraw = !gameState.includes('')
    if (roundDraw) {
        statusDisplay.innerHTML = drawMsg()
        gameActive = false
        return
    }

    playerChange()
}
/* 9) handlePlyerChange (Function):
        - change the current player;
        - update game status msg. */
function playerChange() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    statusDisplay.innerHTML = playerTurn()
}
/* 10) handleRestartGame (Function):
    - set game tracking var back to default;
    - cleaer game board (remove all signs);
    - update gamme status back to current player. */
function restartGame() {
    gameActive = true
    currentPlayer = 'X'
    gameState = ['', '', '', '', '', '', '', '', '']
    statusDisplay.innerHTML = playerTurn()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = '')
}
// 11) Add event listeners to the cells and restart btn 
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellCliick))
document.querySelector('.game-restart').addEventListener('click', restartGame)
