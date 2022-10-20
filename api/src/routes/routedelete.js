//|> EXPRESS ROUTER
const router = require('express').Router();
//|> CONTROLLERS
const { deleteProduct, deleteFichaTecnica } = require('../controllers/deleteProduct');


router.delete('/:id', deleteProduct);
router.delete('/ficha/:id', deleteFichaTecnica)


module.exports = router;
