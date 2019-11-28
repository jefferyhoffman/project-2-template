'use strict';
module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define('ToDo', {
    title: DataTypes.STRING,
    isCompleted: DataTypes.BOOLEAN
  }, {});

  ToDo.associate = function (models) {
    // associations can be defined here
  };

  return ToDo;
};
