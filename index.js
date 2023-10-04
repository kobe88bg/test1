const express = require('express');
const { engine } = require ('express-handlebars');
const expressConfig = require ('./config/express') ;
const routes = require ('./routes' ) ; 
const setupExpress = require('./config/express');




const app = express();


setupExpress(app) ;

app.use(routes) ;






app.listen(5005, () => console.log(`Server is runnind on port 5005`  )) ; 
