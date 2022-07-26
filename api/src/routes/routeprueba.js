//|> EXPRESS ROUTER
const router = require('express').Router();

//|> CONTROLLERS
const { getprueba } = require('../controllers/controllerprueba');
router.get('/', async (req, res) => {
  return res.json(await getprueba());
});
module.exports = router;
