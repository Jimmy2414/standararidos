'use Strict';
const { Productos } = require('../db.js');
async function upDate(req, res) {
  console.log(Productos);
  const { id } = req.params;
  await Productos.update(
    {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      seccion: req.body.seccion,
      categoria: req.body.categoria,
      imagen: req.body.imagen,
    },
    { where: { id: id } }
  );
  res.send('Actualizado');
}
module.exports = {
  upDate,
};
