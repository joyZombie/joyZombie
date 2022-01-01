const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_project', {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_project: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('learning','learned','bid','working','submitted','accepted'),
      allowNull: false
    },
    begin_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_project',
    timestamps: false
  });
};
