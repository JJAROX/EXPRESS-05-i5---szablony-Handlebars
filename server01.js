const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

app.get("/login", function (req, res) {
  res.render('login.hbs');
})
app.get("/index", function (req, res) {
  res.render('index.hbs');
})
