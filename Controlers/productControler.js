const { Router } =  require('express'); 

const router = Router(); 

router.get('/', (req, res) => {
    res.render('home', {layout: false})
}); 
router.get('/create', (req, res) => {
    res.render('create', {layout: false})

}); 

router.get('/test', (req, res)=> {
    res.render('test' , {layout:false}); 

}); 
module.exports = router; 
