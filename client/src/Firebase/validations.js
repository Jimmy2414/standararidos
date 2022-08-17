export default function validations(input) {
  let error = {};
  const nameRegExp = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const categoriaRexExp = /^\d{5,20}$/;

  if (input.nombre === '') {
    error.nombre = 'No puede estar vacío';
  }
  if (!nameRegExp.test(input.name)) {
    error.nombre = 'El nombre puede contener solo letras y espacios, pueden llevar acentos';
  }

  if (input.descripcion === '') {
    error.descripcion = 'No puede estar vacío';
  }
  if (input.descripcion && input.descripcion.length < 50) {
    error.descripcion = '(Más de 50 caracteres) Escribe una descripción para el producto';
  }

  if (input.categoria === '') {
    error.categoria = 'No puede estar vacío';
  }
  if (categoriaRexExp.test(input.name)) {
    error.categoria = 'La categoria solo puede contener solo letras y espacios, pueden llevar acentos';
  }
  return error;
}