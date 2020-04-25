var db = require("../db.js");
var shortId = require("shortid");
module.exports.create = function(req, res) {
  var books = db.get("books").value();
  var users = db.get("users").value();
  res.render("./transactions/create.pug", {
    books: books,
    users: users
  });
};
module.exports.postCreate = function(req, res) {
  req.body.id = shortId.generate();
  db.get("transactions")
    .push(req.body)
    .write();
  res.redirect("/");
};
