var express = require('express');
var router = express.Router();
//var usersRouter = require("../api/paths/users/index.js")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  //usersRouter.GET(req, res, next)
});

module.exports = router;
