const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path");
const { log } = require('console');
const context = {
  subject: "ćwiczenie 5 - dane z tablicy, radios",
  nooption: "nie wybrano opcji w radio",
  fields: [
    { name: "title" },
    { name: "author" },
    { name: "lang" }
  ],
  books: [
    { title: "Lalka", author: "B Prus", lang: "PL" },
    { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
    { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
    { title: "Zamek", author: "F Kafka", lang: "CZ" }
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
  res.render('radios.hbs', context);
})
app.get("/form", function (req, res) {
  let Sraka = []
  console.log(req.query.name);
  switch (req.query.name) {
    case 'title':
      Sraka = context.books.map((book) => { return book.title })
      res.render('radiosback.hbs', { Array: Sraka, subject: context.subject })
      break;
    case 'author':
      Sraka = context.books.map((book) => { return book.author })
      res.render('radiosback.hbs', { Array: Sraka, subject: context.subject })
      break;
    case 'lang':
      Sraka = context.books.map((book) => { return book.lang })
      res.render('radiosback.hbs', { Array: Sraka, subject: context.subject })
      break;
    default:
      res.render('radiosback.hbs', { subject: context.subject, Array: [context.nooption] })
      break;
  }
})