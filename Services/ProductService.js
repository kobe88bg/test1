const Cube = require('../models/Cube');
const uniqid = require('uniqid'); 
const fs = require('fs') ; 
let productsData = require('../config/products.json'); 


function getAll () {
    return productsData; 
}

function create (data) {
    let cube = new Cube(
    uniqid(), 
    data.name, 
    data.description, 
    data.imageUrl , 
    data.difficultyLevel
    );

    productsData.push(cube); 
    console.log(productsData); 

    fs.writeFile('../test1/config/products.json',JSON.stringify(productsData) ,(err) => {
        console.log(err); 
        return;
    });

}


module.exports = {
    create 
}