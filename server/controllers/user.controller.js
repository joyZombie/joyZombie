const db = require("../models");
const User = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  User.findOne({
    where: {
      id_user: req.params.id
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      res.status(200).send({
        userObj: user
      });

      /* var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id_user,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      }); */
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

/* exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
}; */
