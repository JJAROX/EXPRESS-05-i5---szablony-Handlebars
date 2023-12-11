const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const context = {
  subject: "ćwiczenie 2 - podstawowy context",
  content: "to jest lorem ipsum",
  footer: "to jest stopka na mojej stronie"
}
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static('static'))
app.get("/", function (req, res) {
  res.render('context1.hbs', context);
})
