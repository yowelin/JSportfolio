const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const maxNumber = 100;
const numberToGuess = Math.floor(Math.random() * maxNumber) + 1;

function askForNumber() {
    readline.question("Угадайте число от 1 до " + maxNumber + ": ", (answer) => {
        let num = parseInt(answer);

        if (!isNaN(num) && isFinite(answer)) {
            if (num == numberToGuess) {
                console.log("Вы угадали! Правильный ответ: " + numberToGuess);
                readline.close();
            } else if (num > numberToGuess) {
                console.log("Слишком много!");
                askForNumber();
            } else {
                console.log("Слишком мало!");
                askForNumber();
            }
        } else {
            askForNumber();
        }
    });
}

askForNumber();