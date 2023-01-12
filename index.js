let result = '0';
let playerScore     = 0;
let computerScore   = 0;
let winner          = 'Winner';
let looser          = 'Looser';
let gameWon         = false;

/*Get elements by ID and addEventListeners to them
invoke playRound() for each button clicked*/
let rock = document.getElementById("rock");
rock.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    playRound(rock.textContent, computerChoice);
})

let paper = document.getElementById("paper");
paper.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    playRound(paper.textContent, computerChoice);
})

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    playRound(scissors.textContent, computerChoice);
})

let userScore = document.getElementById("player-score");
let compScore = document.getElementById("computer-score");
let message = document.getElementById("message");
let roundMsg = document.getElementById("round-message");
roundMsg.setAttribute('style', 'white-space: pre;');

// generate random choices for the computer  
function computerPlay()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

// play one round of game
function playRound(playerSelection, computerSelection) 
{   
    if (gameWon === true)
    {
        roundMsg.textContent = '';  // erase the winning msg
        playerScore = 0;    // reset the scores
        computerScore = 0;    
        gameWon = false;
    }

    /* If player selects 'Rock'*/
    if(playerSelection == 'Rock')
    {
        if(computerSelection == 'Rock')
        {
            message.textContent = 'No Score! ' + playerSelection + ' ties with ' + computerSelection;

            game(1);  
        }
        else if(computerSelection == 'Paper')
        {
            message.textContent = 'You loose! Paper beats Rock';
            game(2);
        }
        else if(computerSelection == 'Scissors')
        {
            message.textContent = 'You win! Rock beats Scissors';
            game(3);
        }
    }

    /* If player selects 'Scissors'*/
    else if(playerSelection == 'Scissors')
    {
        if(computerSelection == 'Scissors')
        {
            message.textContent = 'No Score! ' + playerSelection + ' ties with ' + computerSelection;

            game(1);   
        }
        else if(computerSelection == 'Rock')
        {
            message.textContent = 'You loose! Rock beats Scissors';
            game(2);         
        }
        else if(computerSelection == 'Paper')
        {
            message.textContent = 'You win! Scissors beats Paper';
            game(3);         
        }
    }

    /* If player selects 'Paper'*/
    else if(playerSelection == 'Paper')
    {
        if(computerSelection == 'Paper')
        {
            message.textContent = 'No Score! ' + playerSelection + ' ties with ' + computerSelection;

            game(1);           
        }
        else if(computerSelection == 'Scissors')
        {
            message.textContent = 'You loose! Scissors beats Paper';
            game(2);         
        }
        else if(computerSelection == 'Rock')
        {
            message.textContent = 'You win! Paper beats Rock';
            game(3);           
        }
    }
    else
    {
        alert('Wrong choice!');
    }
}

// play five rounds of game
function game (result)
{
    // keep track of scores and winner/looser
    if (result === 1)
    {
        winner = 'None';
        looser = 'None';
    }
    if (result === 2)
    {
        winner = 'Computer';
        computerScore++;
        
        looser = 'Player';
        if(playerScore > 0) // decrement only if score is greater than 0.
        {
            playerScore--;
        }               
    }
    if (result === 3)
    {
        winner = 'Player';
        playerScore++;
        
        looser = 'Computer';
        if (computerScore > 0) // decrement only if score is greater than 0.
        {
            computerScore--;
        }
    }
    if (playerScore === 5 || computerScore === 5)
    {
        gameWon = true;

        if (winner == 'Player')
        {
            roundMsg.textContent = 'Winner: ' + winner + ' --- ' + 'Score: ' + playerScore
            + '  ----  ' + 'Looser: ' + looser + ' --- ' + 'Score: ' + computerScore;
        }
        else
        {
            roundMsg.textContent = 'Winner: ' + winner + ' --- ' + 'Score: ' + computerScore
            + '  ----  ' + 'Looser: ' + looser + ' --- ' + 'Score: ' + playerScore;                 
        }
    }

    userScore.textContent = "Player's score: " + playerScore;
    compScore.textContent = "Computer's score: " + computerScore;
}