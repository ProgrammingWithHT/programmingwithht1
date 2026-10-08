const client = require("./client");

async function init(){
    // const result = await client.get("user:1");
    await client.set("msg:6", "Hey from Nodejs");
    // await client.expire("msg:6", "Hey from Nodejs", 10);  //this file expire in 10 second and remove 
    const result = await client.get("msg:6");
    console.log("Result: ", result);
}

init();