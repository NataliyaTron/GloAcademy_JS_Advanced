const num = 266219;

const arr = num.toString().split("");
const multiply = arr.reduce((acc, item) => acc * item, 1);
console.log(multiply);

const newNum = multiply ** 3;
const newArr = newNum.toString().split("").slice(0, 2);

console.log(newArr.toString());
