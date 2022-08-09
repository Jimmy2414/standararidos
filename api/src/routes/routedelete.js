//|> EXPRESS ROUTER
const router = require('express').Router();
//|> CONTROLLERS
const { deleteProduct } = require('../controllers/deleteProduct');

router.delete('/:id', deleteProduct);

module.exports = router;
