const async_await = require("./async-await");

const main = async () => {
  console.log("\n\x1b[32m", "starting ...");

  const response = await async_await(5);
  console.log("\x1b[36m", "yay, we got the result", response);
  console.log("\x1b[31m", "ending ...\n");
  return true;
};

main();
