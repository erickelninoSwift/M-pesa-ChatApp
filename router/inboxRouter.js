const express = require("express");
const router = express.Router();
const decorateHTML = require("../middlewares/common/decorateHtml");

const { inboxController } = require("../controllers/inboxController");

router.get("/", decorateHTML("Inbox"), inboxController);

module.exports = router;
