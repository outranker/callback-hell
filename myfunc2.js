const request = require("request");
const axios = require("axios");
module.exports = async (num) => {
  const res = await axios.get("https://delay.javohirmirzo.fun/" + num);
  return res.data;
};
