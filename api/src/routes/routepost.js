//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const { postProductos } = require('../controllers/postProductos');
router.post('/', postProductos);
module.exports = router;
