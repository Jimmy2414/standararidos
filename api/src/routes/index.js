const post = require('./routepost');
const get = require('./routeget');
const router = require('express').Router();

router.use('/post', post);
router.use('/get', get);
module.exports = router;
