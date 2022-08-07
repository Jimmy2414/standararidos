'use strict';
const { Productos } = require('../db.js');

async function deleteProduct(req, res) {
  const { id } = req.params;
  Productos.destroy({
    where: { id: id },
  });
  res.send('Producto Eliminado');
}
module.exports = {
  deleteProduct,
};
