var DataTypes = require("sequelize").DataTypes;
var _eodp_syslog = require("./eodp_syslog");
var _project = require("./project");
var _tech_skill = require("./tech_skill");
var _user = require("./user");
var _user_project = require("./user_project");
var _user_skill = require("./user_skill");

function initModels(sequelize) {
  var eodp_syslog = _eodp_syslog(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var tech_skill = _tech_skill(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_project = _user_project(sequelize, DataTypes);
  var user_skill = _user_skill(sequelize, DataTypes);


  return {
    eodp_syslog,
    project,
    tech_skill,
    user,
    user_project,
    user_skill,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
