"use strict";

const guessNumber = () => {
  const botNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 10;

  const checkNumber = () => {
    if (attempts === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        guessNumber();
      } else {
        alert("Спасибо за игру!");
      }
      return;
    }

    let userInput = prompt(
      "Угадай число от 1 до 100. Осталось попыток - " + attempts
    );

    if (userInput === null) {
      alert("Игра окончена");
      return;
    }

    const userNumber = +userInput;

    if (isNaN(userNumber)) {
      alert("Введи число!");
      checkNumber();
      return;
    } else if (userNumber > botNumber) {
      attempts--;
      alert("Загаданное число меньше, осталось попыток " + attempts);
      checkNumber();
    } else if (userNumber < botNumber) {
      attempts--;
      alert("Загаданное число больше, осталось попыток " + attempts);
      checkNumber();
    } else {
      if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
        guessNumber();
      } else {
        alert("Спасибо за игру!");
      }
    }
  };
  checkNumber();
};

guessNumber();
