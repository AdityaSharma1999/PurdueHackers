var cars = ["Ford", "Toyota", "Volkswagen"];

var appRouter = function (app) {
	app.get("/index", function(req, res) {
    res.render('pages/index');
  });
  // app.get("/", function(req, res) {
  //   res.render('pages/index');
  // });
}

module.exports = appRouter;