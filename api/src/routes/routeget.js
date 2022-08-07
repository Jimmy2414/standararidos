//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const {
  getProductos,
  getProductByName,
  getProductosByID,
} = require('../controllers/getProductos');
router.get('/', getProductos);
router.get('/search/:nombre', getProductByName);
router.get('/:id', getProductosByID);

module.exports = router;
