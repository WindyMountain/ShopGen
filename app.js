var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use("/public", express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/API", function (req, res) {
    res.render("API.ejs");
});

app.get("/about", function (req, res) {
    res.render("about.ejs");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port);