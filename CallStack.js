function greet(who) {
  console.log("vanakkamda maple " + who);
}

greet("harry pottetr");
console.log("earlalai la irunthu!");

//?
function chiken() {
  return egg();
}

function egg() {
  return chiken();
}

console.log(chiken() + "came first");
