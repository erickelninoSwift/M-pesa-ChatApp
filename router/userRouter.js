const express = require("express");
const router = express.Router();
const decorateHTML = require("../middlewares/common/decorateHtml");
const { userController } = require("../controllers/userController");

router.get("/", decorateHTML("Users"), userController);

module.exports = router;
