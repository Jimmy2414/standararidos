//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const { postProductos } = require('../controllers/postProductos');
const { postFichaTecnica } = require('../controllers/postProductos');
router.post('/', postProductos);
router.post('/ficha', postFichaTecnica);
module.exports = router;
