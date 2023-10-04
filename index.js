const express = require("express");

const app = express();
const config = require('./config/config.js'); 

console.log(process.env.NODE_ENV) ; 

app.listen(5005, () => console.log(`Server is runnind on port ${config.PORT}`  )) ; 



