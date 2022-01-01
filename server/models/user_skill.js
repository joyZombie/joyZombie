const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_skill', {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_skill: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    level: {
      type: DataTypes.ENUM('beginner','intermediate','advanced','expert'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_skill',
    timestamps: false
  });
};
