"use strict";

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let service = prompt("Какой дополнительный тип услуги нужен?");

    let price;
    do {
      price = prompt("Сколько это будет стоить?");

      if (price === null) {
        return "Вы отменили ввод";
      }

      price = price.trim();
    } while (price === "" || isNaN(price));

    sum += Number(price);
  }

  return sum;
};

console.log(getAllServicePrices());
