//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const { upDate } = require('../controllers/getPut');
router.put('/:id', upDate);
module.exports = router;
