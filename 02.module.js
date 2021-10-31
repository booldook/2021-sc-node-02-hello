const zeroPlus = require("./modules/util");
console.log(zeroPlus(11));

const axios = require("axios");
const usersURL = "https://jsonplaceholder.typicode.com/users";

async function init() {
  const { data } = await axios.get(usersURL);
  console.log(data);
}

init();
