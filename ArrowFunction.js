const power = (base, exponent) => {
  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

console.log(power(2, 3));

//? single parameter

let square = (x) => {
  return x * x;
};

//or

let square2 = (x) => x * x;

//! no parameter

let vedi = () => {
  return vedippu;
};
