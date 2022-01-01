const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eodp_syslog', {
    id_log: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    VAR1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VAR2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VAR3: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VAR4: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    VAR5: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'eodp_syslog',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_log" },
        ]
      },
      {
        name: "id_log_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_log" },
        ]
      },
    ]
  });
};
