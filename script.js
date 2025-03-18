"use strict";

// 1a через if
let lang = "ru";

if (lang == "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else if ((lang = "ru")) {
  "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье";
} else {
  console.log("Что-то пошло не так");
}

// 1b через switch-case
switch (lang) {
  case "en":
    console.log(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    );
    break;
  case "ru":
    console.log(
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
      "воскресенье"
    );
    break;
  default:
    console.log("Что-то пошло не так");
}

// 1с через многомерный массив
let arr = [
  [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

let langIndex = lang == "ru" ? 0 : 1;

console.log(arr[langIndex].join(", "));

// 2
let namePerson = prompt("Как тебя зовут?");
namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
