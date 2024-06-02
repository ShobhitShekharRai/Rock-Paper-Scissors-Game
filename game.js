let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");



const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];

}

const drawGame = () => {
  msg.innerText = "Game Draw! Play Again";
  msg.style.backgroundColor = "aqua";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You Win! you${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "yellow";
  }else{
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
  console.log("user choice =",userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice =",compChoice);

if(userChoice === compChoice){
  drawGame();
}else{
  let userWin = true;
  if(userChoice === "rock"){
    userWin = compChoice === "paper" ? false : true;
  }else if(userChoice === "paper"){
    userWin = compChoice === "scissors" ? false: true;
  }else{
    compChoice === "rock" ?false : true;
  }
  showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
      //console.log("choice was clicked!", userChoice);
      playGame(userChoice);
    });
});