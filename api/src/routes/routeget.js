//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const { getProductos } = require('../controllers/getProductos');
router.get('/', getProductos);
module.exports = router;
