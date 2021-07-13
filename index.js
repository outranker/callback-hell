const myFunc = require("./myfunc");

const main = () => {
  console.log("starting ...");

  myFunc(5, (err, result) => {
    if (err) {
      console.log("error occured");
      return;
    }
    console.log("yay, we got the result", result);
    console.log("ending ...");
  });

  return true;
};

main();

// const myFunc2 = require("./myfunc2");

// const main2 = async () => {
//   console.log("starting ...");

//   const myres = await myFunc2(5);
//   console.log("this is myres", myres);
//   console.log("ending ...");
//   return true;
// };

// main2();
