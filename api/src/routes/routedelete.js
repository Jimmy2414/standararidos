const router = require('express').Router();

const { deleteProduct } = require('../controllers/deleteProduct');

router.delete('/:id', deleteProduct);

module.exports = router;
