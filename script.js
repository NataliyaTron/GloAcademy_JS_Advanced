<<<<<<< HEAD
const num = 266219;

const arr = num.toString().split("");
const multiply = arr.reduce((acc, item) => acc * item, 1);
console.log(multiply);

const newNum = multiply ** 3;
const newArr = newNum.toString().split("").slice(0, 2);

console.log(newArr.toString());
=======
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
  console.log(
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье"
  );
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
>>>>>>> lesson03
