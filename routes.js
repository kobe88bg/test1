const {Router}  = require ('express');
const productControler = require ('./Controlers/productControler');


const router = Router(); 
 
router.use('/products', productControler) ;


module.exports = router ; 

 