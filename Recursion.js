// function power(base, exponent) {
//   if (exponent == 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }

// console.log(power(2, 3));

//? factorial

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(6));
