let x = 10;

if (true) {
  let y = 20;
  const a = 40;
  var z = 30;

  console.log(x + y + z + a);
}

console.log(x + z);

//? same name for dif variable

const half = function (n) {
  return n / 2;
};

let n = 10;

console.log(half(100));

//* nested scope
const hummus = function (factor) {
  const increadient = function (amount, unit, name) {
    let increadientAmount = amount * factor;

    if (increadientAmount > 1) {
      unit += "s";
    }

    console.log(`${increadientAmount} ${unit} ${name}`);
  };

  increadient(1, "can", "chickpeas");
  increadient(0.25, "cup", "tahni");
  increadient(0.25, "cup", "lemonjuice");
  increadient(1, "clove", "garlic");
  increadient(2, "tableSpoon", "oil");
  increadient(0.5, "teaSpoon", "cumin");
};

hummus(4);
