const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

// Устанавливаем кодировку для потоков
process.stdin.setEncoding('utf8');
process.stdout.setEncoding('utf8');

let rockPaperScissorsArr = ["камень", "бумага", "ножницы"];
let playerChoice;
let botChoice = Math.floor(Math.random() * 3);

function askQuestion() {
  readline.question("Выберите: 'Камень','Бумага','Ножницы': ", (answer) => {
    console.log(`Вы выбрали: ${answer.toLowerCase()}`);
    playerChoice = rockPaperScissorsArr.indexOf(answer.toLowerCase());
    switch (playerChoice) {
      case 0:
      case 1:
      case 2:
        readline.close();
        console.log(compareChoices(playerChoice, botChoice));
        break;
      default:
        askQuestion();
    }
  });
}

function compareChoices(paramPlayerChoice, paramBotChoice) {
  console.log(`Бот выбрал: ${rockPaperScissorsArr[paramBotChoice]}`);
  switch (paramPlayerChoice) {
    case 0:
      switch (paramBotChoice) {
        case 1:
          return "Bot wins!";
        case 2:
          return "You win!";
        default:
          return "Draw!";
      }
    case 1:
      switch (paramBotChoice) {
        case 0:
          return "You win!";
        case 2:
          return "Bot wins!";
        default:
          return "Draw!";
      }
    case 2:
      switch (paramBotChoice) {
        case 0:
          return "Bot wins!";
        case 1:
          return "You win!";
        default:
          return "Draw!";
      }
  }
}

askQuestion();
