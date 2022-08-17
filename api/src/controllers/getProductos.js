'use Strict';
const { Productos } = require('../db.js');
const { Op } = require('sequelize');

async function getProductByName(req, res) {
  const nombre = `%${req.params.nombre}%`;
  const ProductosName = await Productos.findAll({
    where: {
      nombre: { [Op.like]: nombre.toLocaleLowerCase() },
    },
  });
  res.send(ProductosName);
}
async function getProductos(req, res) {
  const Productostotal = await Productos.findAll();
  res.send(Productostotal);
}
async function getProductosByID(req, res) {
  const { id } = req.query;
  const productosID = await Productos.findByPk(id);
  res.send(productosID);
  console.log(id);
}
module.exports = {
  getProductos,
  getProductByName,
  getProductosByID,
};
