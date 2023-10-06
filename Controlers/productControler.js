const { Router } =  require('express'); 
const productService = require('../Services/ProductService');

const router = Router(); 

router.get('/', (req, res) => {
    let products = productService.getAll() ; 
    res.render('home', {title: "Browse" , products : products })
}); 
router.get('/create', (req, res) => {
    res.render('create')

}); 

router.get('/test', (req, res)=> {
    res.render('test'); 

}); 

router.get('/details/:productId', (req, res)=> {
    res.render('details', {title: "details "}); 

}); 

router.post('/create', (req, res)=> {
    let data = req.body;
    productService.create(data)  

    
    res.redirect('/products'); 

}); 

module.exports = router; 
