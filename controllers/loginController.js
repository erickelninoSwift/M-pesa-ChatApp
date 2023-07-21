function loginController(req, res) {
  res.render("index", {
    title: res.locals.title,
  });
}

module.exports = { loginController };
