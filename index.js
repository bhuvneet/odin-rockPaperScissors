
let result = '0';

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
    /* If player selects 'Rock'*/
    if(playerSelection == 'Rock')
    {
        if(computerSelection == 'Rock')
        {
            result = alert('It\'s a tie!')
            return game(1);
        }
        else if(computerSelection == 'Paper')
        {
            result = alert('You loose! Paper beats Rock');
            return game(2);
        }
        else if(computerSelection == 'Scissors')
        {
            result = alert('You win! Rock beats Scissors');
            return game(3);
        }
    }

    /* If player selects 'Scissors'*/
    else if(playerSelection == 'Scissors')
    {
        if(computerSelection == 'Scissors')
        {
            alert('It\'s a tie!');
            return game(1);
        }
        else if(computerSelection == 'Rock')
        {
            alert('You loose! Rock beats Scissors');
            return game(2);
        }
        else if(computerSelection == 'Paper')
        {
            alert('You win! Scissors beats Paper');
            return game(3);
        }
    }

    /* If player selects 'Paper'*/
    else if(playerSelection == 'Paper')
    {
        if(computerSelection == 'Paper')
        {
            alert('It\'s a tie!');
            return game(1);
        }
        else if(computerSelection == 'Scissors')
        {
            alert('You loose! Scissors beats Paper');
            return game(2);
        }
        else if(computerSelection == 'Rock')
        {
            alert('You win! Paper beats Rock');
            return game(3);
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
    let playerScore     = 0;
    let computerScore   = 0;
    let winner          = 'winner';
    let looser          = 'looser';
    
    // keep track of scores and winner/looser
    if (result == 1)
    {
        winner = 'none';
        looser = 'none';
    }
    else if (result == 2)
    {
        winner = 'computer';
        computerScore++;
        
        looser = 'player';
        if(playerScore > 0) // decrement only if score is greater than 0.
        {
            playerScore--;
        }               
    }
    else if (result == 3)
    {
        winner = 'player';
        playerScore++;
        
        looser = 'computer';
        if (computerScore > 0) // decrement only if score is greater than 0.
        {
            computerScore--;
        }
    }
    if (playerScore == 5)
    {
        if (winner == 'player')
        {
            return alert('winner: ' + winner + '\n' + 'winner\'s score: ' + playerScore
            + '\n' + 'looser: ' + looser + '\n' + 'looser\'s score: ' + computerScore);
        }
        else
        {
            return alert('winner: ' + winner + '\n' + 'winner\'s score: ' + computerScore
            + '\n' + 'looser: ' + looser + '\n' + 'looser\'s score: ' + playerScore);
        }
    }
}

function choice (playerChoice)
{
    let computerChoice  = computerPlay();

    let playerChoice1 = document.getElementById("choice1");    
    playerChoice1.addEventListener("click", ()=>{
        playRound(playerChoice1.innerText, computerChoice);
    });

    let playerChoice2 = document.getElementById("choice2");    
    playerChoice2.addEventListener("click", ()=>{
        playRound(playerChoice2.innerText, computerChoice);
    });

    let playerChoice3 = document.getElementById("choice3");    
    playerChoice3.addEventListener("click", ()=>{
        playRound(playerChoice3.innerText, computerChoice);
    });
}