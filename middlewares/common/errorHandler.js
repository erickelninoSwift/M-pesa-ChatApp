const createError = require("http-errors");

function notFoundHandler(req, res, next) {
  next(createError(404, `Your requested content was not found `));
}

//  default error handler

function customError(err, req, res, next) {
  res.locals.title = "This is error page";

  res.locals.error =
    process.env.NODE_ENV === "developement"
      ? err
      : {
          message: err.message,
        };

  res.status(err.status || 500);

  if (!res.locals.html) {
    res.render("error", {
      title: res.locals.title,
      message: err.message,
      errorStatus: res.status,
    });
  } else {
    res.json({
      message: res.locals.error,
    });
  }
}

module.exports = { notFoundHandler, customError };
