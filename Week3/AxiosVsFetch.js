// Axios Request

const axios = require("axios");

async function main(){
  const response = await axios
    ({
      url: "https://httpdump.app/dumps/7ff5c90f-7fea-41f8-905f-5794b7b516bf",
      method:"POST",
      headers: {
        Authorization: "Bearer 3"
      },
      data: {
        username: "harkirat singh",
        age: "24"
      }  
    })
  console.log(response.data)
}
     
main();

// Fetch Request

const fetch = require("node-fetch");

    function main(){
    fetch("https://postman-echo.com/get")
    .then(async (response) => {
        const json = await response.json();
        console.log(json);
    })
}
main();


