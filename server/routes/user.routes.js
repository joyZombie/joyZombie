const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/user/:id",
    [authJwt.verifyToken],
    controller.userProfile
  );

  app.put(
    "/api/user/setuseremail/:id",
    [authJwt.verifyToken],
    controller.setuseremail
  );

  app.put(
    "/api/user/setuserpassword/:id",
    [authJwt.verifyToken],
    controller.setuserpassword
  );

  app.put(
    "/api/user/setusername/:id",
    [authJwt.verifyToken],
    controller.setusername
  );

  app.put(
    "/api/user/setuserdescription/:id",
    [authJwt.verifyToken],
    controller.setuserdescription
  );

  app.put(
    "/api/user/setusergender/:id",
    [authJwt.verifyToken],
    controller.setusergender
  );

  app.put(
    "/api/user/setuserexpcompany/:id",
    [authJwt.verifyToken],
    controller.setuserexpcompany
  );

  app.put(
    "/api/user/setuserexptotal/:id",
    [authJwt.verifyToken],
    controller.setuserexptotal
  );

/*   app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  ); */
};
