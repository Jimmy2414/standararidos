'use strict';
const { Productos } = require('../db.js');
const { FichaTecnica } = require('../db.js');

async function deleteProduct(req, res) {
  const { id } = req.params;
  Productos.destroy({
    where: { id: id },
  });
  res.send('Producto Eliminado');
}

async function deleteFichaTecnica(req, res) {
  const { id } = req.params;
  FichaTecnica.destroy({
    where: { id: id },
  })
  res.send('Ficha Tecnica Eliminada')
}

module.exports = {
  deleteProduct,
  deleteFichaTecnica,
};
