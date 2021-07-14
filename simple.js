const callback = require("./simple-func");

const main = () => {
  console.log("\n\x1b[32m", "starting ...");

  let result = callback(5);

  console.log("\x1b[36m", "yay, we got the result", result);
  console.log("\x1b[31m", "ending ...\n");
  return true;
};

main();

getSquareIfEven((error, number) => {
  if (error) {
    console.log(`Error is: ${error}`);
  } else {
    console.log(number);
  }
});
