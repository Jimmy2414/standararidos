//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const {
  getProductos,
  getProductByName,
  getProductosByID,
  getFichaTecnica,
} = require('../controllers/getProductos');
router.get('/', getProductos);
router.get('/search/:nombre', getProductByName);
router.get('/search', getProductosByID);
router.get('/fichas', getFichaTecnica);

module.exports = router;
