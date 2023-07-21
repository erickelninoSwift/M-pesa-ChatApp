const express = require("express");
const router = express.Router();
const decorateHTML = require("../middlewares/common/decorateHtml");
const { loginController } = require("../controllers/loginController");

router.get("/", decorateHTML("Login"), loginController);

module.exports = router;
