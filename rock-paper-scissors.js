

const getUserChoice=(choice)=>{
    let userInput=choice.toLowerCase();
    switch(userInput){
      case 'rock':
      console.log('It is a rock');
      break;
      case 'paper':
      console.log('It is a paper');
      break;
      case 'scissor':
      break;
      default:
      console.log('Invalid input-'+userInput);
      break;
    }
  
  }
   let compChoiceWords='';
  const getComputerChoice=()=>{
   var compChoice=Math.floor(Math.random() *3);
  
   switch(compChoice){
    case 0:
    compChoiceWords='rock';
    break;
    case 1:
    compChoiceWords='paper';
    break;
    case 2:
    compChoiceWords='scissors';
    break;
   }
  }
  
  const battle=(userInput)=>{
  userInput=userInput.toLowerCase();
  console.log('User chose-'+userInput);
  console.log('Computer Chose-'+compChoiceWords);
  if(userInput==='rock'&&compChoiceWords==='rock'){
    console.log('It is a tie');
  }
  if(userInput==='rock'&&compChoiceWords==='paper'){
    console.log('Computer wins!');
  }
  if(userInput==='rock'&&compChoiceWords==='scissors'){
    console.log('You win! Hooray!');
  }
  if(userInput==='paper'&&compChoiceWords==='rock'){
    console.log('You win! Hooray!!');
  }
  if(userInput==='paper'&&compChoiceWords==='paper'){
    console.log('It is a tie');
  }
  if(userInput==='paper'&&compChoiceWords==='scissors'){
    console.log('Computer wins! Boo :(');
  }
  if(userInput==='scissors'&&compChoiceWords==='rock'){
    console.log('Computer wins, dont be sad');
  }
  if(userInput==='scissors'&&compChoiceWords==='paper'){
    console.log('You win! Yay!');
  }
  if(userInput==='scissors'&&compChoiceWords==='scissors'){
    console.log('It is a tie');
  }
  if(userInput==='bomb'){
    console.log('You used a nuclear bomb. You win!');
  }
  }
  getComputerChoice();
  //add your option here
  battle('Bomb');
  
  