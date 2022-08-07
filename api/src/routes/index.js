const post = require('./routepost');
const get = require('./routeget');
const put = require('./routeput');
const del = require('./routedelete');
const router = require('express').Router();

router.use('/post', post);
router.use('/get', get);
router.use('/put', put);
router.use('/del', del);

module.exports = router;
