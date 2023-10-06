const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();



function setupExpress (app) {
    
    app.engine('hbs', engine({defaultLayout: 'main', extname: '.hbs'}));
        //app.engine('hbs', engine());
    app.set('view engine', 'hbs');
    app.set("hbs", "./views");
    app.use( express.static('public')); 
    app.use(express.urlencoded({
        extended: true 
    })); 

    
}


module.exports = setupExpress;
