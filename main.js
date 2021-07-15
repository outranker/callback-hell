const callback = require("./callback");

const main1 = (number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof number === "number"
        ? resolve(number * 2)
        : reject("Number must be provided");
    }, 2000);
  });

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
main1(2)
  .then((data) => {
    return main1(data);
  })
  .then((data) => {
    return main1(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
