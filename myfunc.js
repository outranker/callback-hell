const request = require("request");

module.exports = (num, cb) => {
  let req = request.get(
    "https://delay.javohirmirzo.fun/" + num,
    (err, data) => {
      cb("", data.body);
      console.log(data.body);
    }
  );
  //   console.log(abc);
};
