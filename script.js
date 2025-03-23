"use strict";

const checkString = (str) => {
  if (typeof str !== "string") {
    console.log("Ошибка! В качестве аргумента передана не строка");
    return;
  } else {
    str = str.trim();

    if (str.length > 30) {
      str = str.slice(0, 30) + "...";
    }
    return str;
  }
};

console.log(
  checkString(
    " Скажи-ка, дядя, ведь не даром Москва, спаленная пожаром, Французу отдана?  "
  )
);
