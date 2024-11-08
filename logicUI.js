const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissor = document.querySelector("#scissor");
const hmScore = document.querySelector("#hmScore");
const comScore = document.querySelector("#comScore");
const compText = document.querySelector("#comp-text");

let human = 0, computer = 0;

btnRock.addEventListener("click", () => {
    console.log("rock picked");
    playGame("rock");
});

btnPaper.addEventListener("click", () => {
    playGame("paper");
    console.log("paper picked");
});

btnScissor.addEventListener("click", () => {
    playGame("scissor");
    console.log("scissor picked");
});



function getCompChoice()
{
    let a = Math.floor(Math.random()*3);

    switch(a)
    {
        case 0: return "rock";
        break;
        case 1: return "paper";
        break;
        case 2: return "scissor";
        break;
    }
}

function playGame(humanChoice)
{

    comChoice = getCompChoice();

    if (comChoice != null || humanChoice != null)
        {
            if (comChoice == humanChoice)
            {
                compText.textContent = "It's a draw!";

            }
            else if((humanChoice == "paper" && comChoice == "rock") || (humanChoice == "rock" && comChoice == "scissor") || (humanChoice == "scissor" && comChoice == "paper"))
            {
                compText.textContent = "You win!";
                human++;
                print(human);
                hmScore.textContent = human;

            }
            else if ((comChoice == "paper" && humanChoice == "rock") || (comChoice == "rock" && humanChoice == "scissor") || (comChoice == "scissor" && humanChoice == "paper"))
            {
                compText.textContent = "You lose!";
                computer++;
                print(computer);
                comScore.textContent = computer;
            }
    
        }
        else
        {
            console.log("one of the parameter is null");
        }

}

function print(a)
{
    console.log(a);
}
