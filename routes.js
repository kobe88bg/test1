const { Router } = require('express');
const productControler = require('./Controlers/productControler');
const aboutControler = require('./Controlers/aboutController');

const router = Router();


router.use('/', aboutControler);
router.use('/products', productControler);


router.get('*', (req, res) => {
    res.render('404')
}
);

module.exports = router;

