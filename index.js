
let result = '0';

/*Get elements by ID and addEventListeners to them
invoke playRound() for each button clicked*/
let rock = document.getElementById("rock");
rock.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    console.log(rock.textContent);
    playRound(rock.textContent, computerChoice);
})

let paper = document.getElementById("paper");
paper.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    console.log(paper.textContent);
    playRound(paper.textContent, computerChoice);
})

let scissors = document.getElementById("scissors");
scissors.addEventListener("click", function()
{
    let computerChoice  = computerPlay();
    console.log(scissors.textContent);
    playRound(scissors.textContent, computerChoice);
})

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
            alert('It\'s a tie!')
            game(1);
            return;
        }
        else if(computerSelection == 'Paper')
        {
            alert('You loose! Paper beats Rock');
            game(2);
            return;
        }
        else if(computerSelection == 'Scissors')
        {
            alert('You win! Rock beats Scissors');
            game(3);
            return;
        }
    }

    /* If player selects 'Scissors'*/
    else if(playerSelection == 'Scissors')
    {
        if(computerSelection == 'Scissors')
        {
            alert('It\'s a tie!');
            game(1);
            return;
        }
        else if(computerSelection == 'Rock')
        {
            alert('You loose! Rock beats Scissors');
            game(2);
            return;
        }
        else if(computerSelection == 'Paper')
        {
            alert('You win! Scissors beats Paper');
            game(3);
            return;
        }
    }

    /* If player selects 'Paper'*/
    else if(playerSelection == 'Paper')
    {
        if(computerSelection == 'Paper')
        {
            alert('It\'s a tie!');
            game(1);
            return;
        }
        else if(computerSelection == 'Scissors')
        {
            alert('You loose! Scissors beats Paper');
            game(2);
            return;
        }
        else if(computerSelection == 'Rock')
        {
            alert('You win! Paper beats Rock');
            game(3);
            return;
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

    return;
}