const request = require("request");

module.exports = (num) => {
  let data;
  request.get(`https://delay.javohirmirzo.fun/${num}`, (err, data) => {
    data = data.body;
  });
  setTimeout(() => {
    console.log(data);
    return data;
  }, 5500);
};

const getSquareIfEven = (callback) => {
  data = [3, 4, 5, 6, 7];
  data.forEach((number) => {
    let result = [];
    if (number % 2 === 0) {
      result.push(number * 2);
      callback(undefined, result);
    } else {
      callback(`The number was odd ${number}`, undefined);
    }
  });
};
