const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tech_skill', {
    id_skill: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tech_skill',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_skill" },
        ]
      },
      {
        name: "id_skill_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_skill" },
        ]
      },
    ]
  });
};
