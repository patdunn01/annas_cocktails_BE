const express = require("express");
const router = express.Router();

const {
    getPosts
  } = require("./controllers/controller");

router.route("/").get(getPosts);

module.exports = router;