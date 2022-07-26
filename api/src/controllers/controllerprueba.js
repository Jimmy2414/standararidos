'use strict';

const { prueba } = require('../db.js');

async function getprueba() {
  // const stotal = await prueba.findAll({});
  const stotal = ['Hola Mundo'];
  return stotal;
}
module.exports = {
  getprueba,
};
