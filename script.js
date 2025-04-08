"use strict";

// Создаем массив дней недели
const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

// Получаем текущую дату
let date = new Date();
// Создание элемента <div>, но на данный момент этот элемент еще не добавлен в DOM (Document Object Model) и не отображается на странице.
let div = document.createElement("div");
//Присвоение класса
div.className = "week";
// Установка внутреннего HTML-содержимое элемента <div>.
div.innerHTML = "";

for (let key in week) {
  if (week[key] === "Суббота" || week[key] === "Воскресенье") {
    div.innerHTML += "<i>" + week[key] + "</i>" + "</br>";
  } else if (key == date.getDay() - 1) {
    div.innerHTML += "<b>" + week[key] + "</b>" + "</br>";
  } else {
    div.innerHTML += "<span>" + week[key] + "</span>" + "</br>";
  }
}

document.body.append(div);
