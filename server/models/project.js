const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    id_project: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    problem: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    expectation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    files_input: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    accepted_soln: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    target_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Draft','Open','Started','Review','Closed','Abandoned'),
      allowNull: false
    },
    complexity: {
      type: DataTypes.ENUM('easy','moderate','hard','veryHard'),
      allowNull: false
    },
    closer_user: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    close_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'project',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_project" },
        ]
      },
      {
        name: "id_project_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_project" },
        ]
      },
    ]
  });
};
