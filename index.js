
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
{   /* If player selects 'Rock'*/
    if(playerSelection == 'Rock')
    {
        if(computerSelection == 'Rock')
        {
            result = alert('It\'s a tie!')
            return 1;
        }
        if(computerSelection == 'Paper')
        {
            result = alert('You loose! Paper beats Rock');
            return 2;
        }
        if(computerSelection == 'Scissors')
        {
            result = alert('You win! Rock beats Scissors');
            return 3;
        }
    }

    /* If player selects 'Scissors'*/
    else if(playerSelection == 'Scissors')
    {
        if(computerSelection == 'Scissors')
        {
            result = alert('It\'s a tie!');
            return 1;
        }
        if(computerSelection == 'Rock')
        {
            result = alert('You loose! Rock beats Scissors');
            return 2;
        }
        if(computerSelection == 'Paper')
        {
            result = alert('You win! Scissors beats Paper');
            return 3;
        }
    }

    /* If player selects 'Paper'*/
    else if(playerSelection == 'Paper')
    {
        if(computerSelection == 'Paper')
        {
            result = alert('It\'s a tie!');
            return 1;
        }
        if(computerSelection == 'Scissors')
        {
            result = alert('You loose! Scissors beats Paper');
            return 2;
        }
        if(computerSelection == 'Rock')
        {
            result = alert('You win! Paper beats Rock');
            return 3;
        }
    }
    else
    {
        alert('Wrong choice!');
    }
}

// play five rounds of game
function game ()
{
    let playerScore     = 0;
    let computerScore   = 0;
    let winner          = 'winner';
    let looser          = 'looser';
    let playerChoice    = '0';
    let computerChoice  = '0';

    playerChoice = prompt("Enter your choice");
    // create 3 buttons for user to click

    computerChoice = computerPlay();
    
    result = playRound(playerChoice, computerChoice);

    // keep track of scores and winner/looser
    if (result == 1)
    {
        winner = 'none';
        looser = 'none';
        return alert('winner: ' + winner + '\n' + 'looser: ' + looser + '.' + '\n' + 'score is: 0');
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
        return alert('winner: ' + winner + '\n' + 'winner\'s score: ' + computerScore
        + '\n' + 'looser: ' + looser + '\n' + 'looser\'s score: ' + playerScore);                
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
        
        return alert('winner: ' + winner + '\n' + 'winner\'s score: ' + playerScore
        + '\n' + 'looser: ' + looser + '\n' + 'looser\'s score: ' + computerScore); 
    }

}

console.log(game());