function inboxController(req, res) {
  res.render("inbox", {
    title: res.locals.title,
  });
}
module.exports = { inboxController };
