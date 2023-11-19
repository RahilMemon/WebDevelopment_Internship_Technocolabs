const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        // console.log(userInput);
        return userInput;
    }else{
        console.log(`Error None is choosen`);
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
        return 'rock';
        case 1:
        return 'paper';
        case 2:
        return 'scissors';
      }
}

function determineWinner(getUserChoice,getComputerChoice) {
    if(getUserChoice === getComputerChoice){
        return 'The Game was Tie';
    }
    if(getUserChoice === 'rock'){
        if(getComputerChoice === 'paper'){
            return 'The System won';
        }else{
            return 'User won';
        }
    }
    if(getUserChoice === 'paper') {
        if(getComputerChoice === 'scissors'){
          return 'The computer won!';
        } else {
          return 'You won!';
        }
      }
      if(getUserChoice === 'scissors'){
        if(getComputerChoice === 'rock'){
          return 'The computer won!'
        } else {
          return 'You won!';
        }
      }
}

function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: '+ userChoice)
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
   }
   playGame()
// getUserChoice('rock');