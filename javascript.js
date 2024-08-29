let buttons = document.querySelectorAll('button')
let roundCounter = document.querySelector('.roundCounter')
let hScore = document.querySelector('.humanScore')
let cScore = document.querySelector('.computerScore')
let result = document.querySelector('.result')
let outcome = document.querySelector('.finalOutcome')
const p = document.createElement('p')


//Generate computer choice
let getComputerChoice = function() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        return "Rock";
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//Keep track of scores/rounds
let humanScore = 0
let computerScore = 0
let roundsPlayed = 0


//Play one round
let playRound = function(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            p.innerText = "It's a tie! Go again";
            result.appendChild(p);
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            p.innerText = ("You win! " + humanChoice + " beats " + computerChoice);
            result.appendChild(p);
            humanScore++
        } else {
            p.innerText = ("You lose! " + computerChoice + " beats " + humanChoice);
            result.appendChild(p)
            computerScore++
        }

    roundsPlayed++
    roundCounter.innerText = "Rounds Played - " + roundsPlayed
    hScore.innerText = "Player - " + humanScore
    cScore.innerText = "Computer - " + computerScore

    // //Print final score
    if (humanScore === 5 || computerScore === 5) {
        console.log("Final Score:");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);

        if (humanScore > computerScore) {
            p.innerText = ("Congratulations!")
            result.appendChild(p);
            console.log("Congratulations!");
        } else if (humanScore < computerScore) {
            p.innerText = ("Better luck next time!")
            result.appendChild(p);
        } else {
            p.innerText = ("Nothing between yous! Reload and try again?")
            result.appendChild(p);
        }

        buttons.forEach(button => button.disabled = true);
    }
}

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let humanChoice = e.target.textContent;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            })
        })

    
       