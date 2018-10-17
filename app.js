var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

var server = app.listen(3000, function () {
    console.log("Testing: The app is running on port.", server.address().port);
});
// app.get("/index", function(req, res) {
//     res.render('pages/index');
//   });


// routes.route('/products/:product_id').put(function (req, res) {

//     product.findById(req.params.product_id, function (err, prod) {
        
//         prod.save(function (err) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Product updated!' });
//         });

//     });
// });