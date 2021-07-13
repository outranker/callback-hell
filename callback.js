const request = require("request");

module.exports = (num, cb) => {
  request.get(`https://delay.javohirmirzo.fun/${num}`, (err, data) => {
    if (err) {
      cb(err, null);
    }
    cb(null, data.body);
  });
};
