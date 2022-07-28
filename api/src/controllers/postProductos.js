'use strict';

const { Productos } = require('../db.js');

async function postProductos(req, res) {
  const { nombre, descripcion, seccion, categoria, imagen } = req.body;
  await Productos.create({
    nombre,
    descripcion,
    seccion,
    categoria,
    imagen,
  });
  res.send('Producto Creado');
}
module.exports = {
  postProductos,
};