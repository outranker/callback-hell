const callback = require("./callback");

const main1 = (makebread) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof makebread === "string"
        ? resolve(makebread + " and ")
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
main1("get the yeast")
  .then((data) => {
    const data2 = data + "make flour";
    return main1(data2);
  })
  .then((data) => {
    const data3 = data + "add ingrediets and make dough";
    return main1(data3);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
