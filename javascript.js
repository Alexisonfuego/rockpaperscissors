//Request user choice
let getHumanChoice = function () {
    let humanChoice = prompt("Time to throw them up", "Rock, Paper, or Scissors?").toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else {
        console.log("Sorry, try again");
        return null;
    }
}

//Generate computer choice
let getComputerChoice = function() {
    let computerChoice = Math.random();

    if (computerChoice <= 0.33) {
        return "rock";
    } else if (computerChoice > 0.33 && computerChoice <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let playGame = function() {

    //Keep track of scores/rounds
    let humanScore = 0
    let computerScore = 0
    let roundsPlayed = 0
    

    //Play one round
    let playRound = function(humanChoice, computerChoice) {
        if (humanChoice != null) {
            if (humanChoice === computerChoice) {
                console.log("It's a tie! Go again");
            } else if (
                (humanChoice === "rock" && computerChoice === "scissors") ||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")
            ) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++
            } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                computerScore++
            }

            { roundsPlayed++ }
            
            console.log("Rounds played: " + roundsPlayed);
            console.log("Current score: Human " + humanScore + ", Computer " + computerScore);
        }

        //Print final score
        if (humanScore === 5 || computerScore === 5) {
            console.log("Final Score:");
            console.log("Human: " + humanScore);
            console.log("Computer: " + computerScore);

            if (humanScore > computerScore) {
                console.log("Congratulations!");
            } else if (humanScore < computerScore) {
                console.log("Better luck next time!");
            } else {
                console.log("Nothing between yous! Reload and try again?");
            }

            buttons.forEach(button => button.disabled = true);
        }
    }   

    //Loop for 5 rounds + keep track of round count
    // for (let i = 0; i < 5;) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    // playRound(humanChoice, computerChoice);
    // if(humanChoice != null) { roundsPlayed++; i++ }
    // }

    let buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let humanChoice = e.target.textContent.toLowerCase();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            
            })
        })
  
}
    
playGame();
