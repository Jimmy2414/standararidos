const { DataTypes, Sequelize } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('FichaTecnica', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    seccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
}
