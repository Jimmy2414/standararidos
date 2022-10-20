'use strict';

const { Productos } = require('../db.js');
const { FichaTecnica } = require('../db.js')

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
async function postFichaTecnica(req, res) {
  const { seccion, imagen } = req.body;
  await FichaTecnica.create({
    seccion,
    imagen,
  })
  res.send('Ficha Tecnica Creada');
}
module.exports = {
  postProductos,
  postFichaTecnica
};