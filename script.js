let num = 266219;

let arr = num.toString().split("");
let multiply = arr.reduce((acc, item) => acc * item, 1);
console.log(multiply);

let newNum = multiply ** 3;
let newArr = newNum.toString().split("").slice(0, 2);

console.log(newArr.toString());
