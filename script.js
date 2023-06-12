let score = 0;
let match = 0;
let playerChoice;

const scorespan = document.querySelector(".score");
const computer = document.querySelector(".computer");
const winner = document.querySelector(".winner");

winner.textContent = "";

const rock = document.querySelector(".rock");
rock.addEventListener("click", function (){playerChoice="rock";
game(playerChoice);
});
const paper = document.querySelector(".paper");
paper.addEventListener("click", function (){playerChoice="paper";
game(playerChoice);
});
const sci = document.querySelector(".sci");
sci.addEventListener("click",  function (){playerChoice="scissors";
game(playerChoice);
});

function getComputerChoice() {
    let ans;
    let num = Math.floor(Math.random() * 30 + 1);

    if (num <= 10) {
        ans = "rock";
    }
    else if (num > 10 && num <= 20) {
        ans = "paper";
    }
    else if (num > 20 && num <= 30) {
        ans = "scissors";
    }
    return ans; //random whole number between 1-30
}

// function oneRound(playerChoice, computerChoice){
//     playerChoice = playerChoice.toLowerCase();
//     let ans;

//     if(playerChoice === 'rock' && computerChoice == "paper")
//     {
//         ans = "You lose! Paper beats Rock";
//     }
//     else if(playerChoice === 'paper' && computerChoice == "scissors")
//     {
//         ans = "You lose! Scissors beats Paper";
//     }
//     else if(playerChoice === 'scissors' && computerChoice == "rock")
//     {
//         ans = "You lose! Rock beats Scissors";
//     }
//     else if(playerChoice === computerChoice)
//     {
//         ans = "It's a tie!";
//     }
//     else
//     {
//         ans = "You win!";
//     }
//     return ans;
// }

function oneRound(playerChoice, computerChoice) {
    let ans;
    if (playerChoice === 'rock' && computerChoice == "paper") {
        ans = 0;
    }
    else if (playerChoice === 'paper' && computerChoice == "scissors") {
        ans = 0;
    }
    else if (playerChoice === 'scissors' && computerChoice == "rock") {
        ans = 0;
    }
    else if (playerChoice === computerChoice) {
        ans = 0;
    }
    else {
        ans = 1;
    }
    return ans;
}

function game(playerChoice) {
    match++;
    let computerChoice;
    computerChoice = getComputerChoice();
    console.log(`${playerChoice} and ${computerChoice}\n`);
    score += oneRound(playerChoice, computerChoice);
    computer.textContent = `Computer's Choice: ${computerChoice}`;
    scorespan.textContent = `Score: ${score}`;

    if (match === 5 && score > (5 - score)) {
        winner.textContent = "You win!!!";
    }
    else if(match===5){
        winner.textContent = "You lost :(";
    }
}