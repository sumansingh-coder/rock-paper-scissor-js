let begin = confirm("Wanna play Rock, Paper, Scissors");
if(begin){
    let playerChoice = prompt("Enter your choice Rock, Paper or Scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissor" ){
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = computerChoice === 1 ? "rock" : computerChoice ===2 ? "paper" : "scissor";
            let result = 
                playerOne === computer ?
                "Tie Game!" :
                (playerOne === "rock" && computer === "paper") ||
                (playerOne === "paper" && computer === "scissor") ||
                (playerOne === "scissor" && computer === "rock") ?
                `Player Choice:${playerOne} \n Computer Choice:${computer} \n Computer Won` : `Player Choice:${playerOne} \n Computer Choice:${computer} \n Player Won`;
            alert(result);
            let  playAgain = confirm("Play Again?");
            playAgain? location.reload() : alert("Ok, Thanks for playing...");
        }
        else{
            alert("Enter the Correct value");
        }
    }else{
        alert("Seems you changed your mind. Fine maybe Next time!");
    }
}
else{
    alert("Ok but you're gonna miss out the fun!");
}