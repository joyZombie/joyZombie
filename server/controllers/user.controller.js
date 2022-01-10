const db = require("../models");
var bcrypt = require("bcryptjs");
const fs = require("fs");
const image = require("../models/image");
const User = db.user;
const Image = db.image;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userProfile = (req, res) => {
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

exports.setuseremail = (req, res) => {
  User.update({email:req.body["email"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "Email updated"});
    }
    res.status(404).send({ message: "Error in updating email" });
  })
};

exports.setuserpassword = (req, res) => {
  User.update({password:bcrypt.hashSync(req.body["password"], 8)}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "password updated"});
    }
    res.status(404).send({ message: "Error in updating password" });
  })
};

exports.setusername = (req, res) => {
  User.update({name:req.body["name"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "User name updated"});
    }
    res.status(404).send({ message: "Error in updating name" });
  })
};

exports.setuserdescription = (req, res) => {
  User.update({description:req.body["description"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "Description updated"});
    }
    res.status(404).send({ message: "Error in updating description" });
  })
};

exports.setusergender = (req, res) => {
  User.update({gender:req.body["gender"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "Gender updated"});
    }
    res.status(404).send({ message: "Error in updating gender" });
  })
};

exports.setuserexpcompany = (req, res) => {
  User.update({exp_company:req.body["exp_company"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "Exp company updated"});
    }
    res.status(404).send({ message: "Error in updating exp comp" });
  })
};

exports.setuserexptotal = (req, res) => {
  User.update({exp_total:req.body["exp_total"]}, {where: {id_user : req.params.id}}).then (num => {
    if (num == 1) {
      return res.status(200).send({message: "Exp total updated"});
    }
    res.status(404).send({ message: "Error in updating exp total" });
  })
};

exports.uploadprofilepic = (req, res) => {
  if (!req.file) {
    res.status(404).send({message: "No image found"});
    console.log("No file upload");
  } else {
    console.log(req.file.filename);
    Image.create( {
      mimetype: req.file.mimetype, 
      name: req.file.filename,
      data: fs.readFileSync('./public/images/uploads/' + req.file.filename)
    }).then((updimage) => {
      console.log("file uploaded");
      return res.send(`File has been uploaded.`);
    });
  }
};

/* exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
}; */
