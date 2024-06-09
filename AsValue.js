let launchMissiles = function () {
  console.log("missiles launched!");
};

console.log(launchMissiles());

let SafeMode = true;

if (SafeMode) {
  launchMissiles = function () {
    console.log("Safe mode Activated, no missiles launched");
  };

  console.log(launchMissiles());
}
