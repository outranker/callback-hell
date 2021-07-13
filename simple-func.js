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
