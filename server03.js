const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const context = {
  subject: "ćwiczenie 3 - dane z tablicy obiektów",
  books: [
    { title: "Lalka", author: "B Prus", lang: "PL" },
    { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
    { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
    { title: "Homo Deus", author: "Yuval Noah Harari", lang: "CZ" }
  ]
}
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');
app.use(express.static('static'))
app.get("/", function (req, res) {
  res.render('context2.hbs', context);
})