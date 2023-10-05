const { Router } =  require('express'); 

const router = Router(); 

router.get('/', (req, res) => {
    res.render('home')
}); 
router.get('/create', (req, res) => {
    res.render('create')

}); 

router.get('/test', (req, res)=> {
    res.render('test' , {layout:true}); 

}); 
module.exports = router; 
