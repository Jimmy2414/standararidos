'use strict';

const { FichaTecnica } = require('../db.js')


async function postFichaTecnica(req, res) {
  const { seccion, imagen } = req.body;
  await FichaTecnica.create({
    seccion,
    imagen,
  })
  res.send('Ficha Tecnica Creada');
}
module.exports = {
  postFichaTecnica
};