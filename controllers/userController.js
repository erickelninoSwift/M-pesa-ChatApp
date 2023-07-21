function userController(req, res) {
  res.render("users", {
    title: res.locals.title,
  });
}

module.exports = { userController };
