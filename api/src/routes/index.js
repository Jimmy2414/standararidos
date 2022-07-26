const prueba = require('./routeprueba');
const router = require('express').Router();

router.use('/prueba', prueba);
module.exports = router;
