function maxPossible(num1, num2) {
  let array1 = [];
  let array2 = [];
  let result = 0;
  while (num1) {
    array1.unshift(num1 % 10);
    num1 = Math.floor(num1 / 10);
  }

  while (num2) {
    array2.unshift(num2 % 10);
    num2 = Math.floor(num2 / 10);
  }
  array2.sort((a, b) => b - a);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > array2[0] || array2.length === 0) {
      result = result * 10 + array1[i];
    } else {
      result = result * 10 + array2[0];
      array2.shift();
    }
  }
  return result;
}
let number1 = 2345;
let number2 = 678;
console.log(maxPossible(number1, number2));
