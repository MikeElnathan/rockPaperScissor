// Rock, Paper, Scissor

let humanScore = 0, compScore = 0;
playGame();


function playGame()
{
    console.log("playGame");
    // loop 5 times.
    for (i = 0; i < 5; i++)
    {
        playRound();
    }
}

function playRound()
{
    // compare these two parameters with if statement, update score accordingly, console.log
    // the winner and updated score.
    let Comp = getCompChoice();
    let Hum = getHumChoice();

    if (Comp != null || Hum != null)
    {
        if (Comp == Hum)
        {
            console.log("It's a draw! " + "You: " + humanScore + " Computer: " + compScore);
            console.log("Human: " + Hum + "," + " " + "Computer: " + Comp);
        }
        else if((Hum == "paper" && Comp == "rock") || (Hum == "rock" && Comp == "scissor") || (Hum == "scissor" && Comp == "paper"))
        {
            humanScore++;
            console.log("You win! " + "You: " + humanScore + " Computer: " + compScore);
            console.log("Human: " + Hum + "," + " " + "Computer: " + Comp);
        }
        else if ((Comp == "paper" && Hum == "rock") || (Comp == "rock" && Hum == "scissor") || (Comp == "scissor" && Hum == "paper"))
        {
            compScore++;
            console.log("Computer win! " + "You: " + humanScore + " Computer: " + compScore);
            console.log("Human: " + Hum + "," + " " + "Computer: " + Comp);
        }

    }
    else
    {
        console.log("one of the parameter is null");
    }
}

function getCompChoice()
{
    // Get computer choice. Generate random number from 0 to 3,
    //then use switch case to match the generated number with either 
    // Rock, Paper, Scissor. Return String.
    let a = Math.floor(Math.random()*3);
    // console.log(a);

    switch(a)
    {
        case 0 : return "rock";
        break;
        case 1 : return "paper";
        break;
        case 2 : return "scissor";
        break;
    }
}

function getHumChoice()
{
    // Prompt user to enter either Rock, Paper, Scissor. Return string.
    let a = prompt("Enter either Paper, Rock, or Scissor");
    
    return String(a).toLowerCase();
    
}
