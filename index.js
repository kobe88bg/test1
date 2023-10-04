const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('hbs', engine());
app.set('view engine', 'hbs');
app.set("hbs", "./views");
app.use( express.static('public')); 
 
app.get ('/',  (req , res) => {
    res.render('home', {layout: false});

} );



app.listen(5005, () => console.log(`Server is runnind on port 5005`  )) ; 
