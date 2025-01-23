let userScore = 0;
let compScore = 0; 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoremesg = document.querySelector("#user-score");
const compScoremesg = document.querySelector("#comp-score");




const genCompChoice =  () =>{
  //rock,paper,scissors
  const options=["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText=" Game was DRAW play again!!"
    msg.style.backgroundColor ="black";
}  

const showWinner=(userwin,userChoice,compChoice) =>{
   if(userwin)
   {
      userScore++;
      userScoremesg.innerText=userScore;
      console.log("YOU WIN");
      msg.innerText=`YOU WIN!! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor ="green";
   }
   else
   { 
       compScore++;
       console.log("YOU LOSE");
       compScoremesg.innerText=compScore;
       msg.innerText=`YOU LOSE!! ${compChoice} beats your ${userChoice}`;
       msg.style.backgroundColor ="red";
   }

}

const playgame = (userChoice)=>{
    console.log("user choice = ",userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice:",compChoice);

  if(userChoice === compChoice)
  {
      drawGame();
  } 
  else
  {
     let userwin=true;
     if(userChoice==="rock")
     { 
        userwin = compChoice== "paper"? false : true;
     }
     else if(userChoice==="paper")
     {
        userwin = compChoice=="scissors"?false :true;
     }
     else
     {
        userwin = compChoice=="rock"?false :true;
     }
     showWinner(userwin,userChoice,compChoice);
  } 

}

choices.forEach((choice)=>{
   console.log(choice);
   choice.addEventListener("click",()=>{
   const userChoice = choice.getAttribute("id");
   playgame(userChoice);

   });
});
