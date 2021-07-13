const callback = require("./callback");

const main = () => {
  console.log("\n\x1b[32m", "starting ...");

  callback(5, (err, result) => {
    if (err) {
      console.log("\x1b[41m", "error occured");
      return;
    }
    console.log("\x1b[36m", "yay, we got the result", result);
    console.log("\x1b[31m", "ending ...\n");
  });

  return true;
};

main();
