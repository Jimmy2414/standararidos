'use Strict';
const { Productos } = require('../db.js');
async function getProductos(req, res) {
  const Productostotal = await Productos.findAll();
  res.send(Productostotal);
}
module.exports = {
  getProductos,
};