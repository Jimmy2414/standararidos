const post = require('./routepost');
const get = require('./routeget');
const put = require('./routeput');
const router = require('express').Router();

router.use('/post', post);
router.use('/get', get);
router.use('/put', put);
module.exports = router;
