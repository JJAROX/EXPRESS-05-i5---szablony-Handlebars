const hbs = require('express-handlebars');
const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path");
const { log } = require('console');
const context = {
  subject: "ćwiczenie 4 - dane z tablicy, select",
  nooption: "nie wybrano opcji w select",
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
  res.render('context3.hbs', context);
})
app.get("/form1", function (req, res) {
  let Sraka = []
  switch (req.query.select) {
    case 'title':
      Sraka = context.books.map((book) => { return book.title })
      res.render('select.hbs', { Array: Sraka, subject: context.subject })
      break;
    case 'author':
      Sraka = context.books.map((book) => { return book.author })
      res.render('select.hbs', { Array: Sraka, subject: context.subject })
      break;
    case 'lang':
      Sraka = context.books.map((book) => { return book.lang })
      res.render('select.hbs', { Array: Sraka, subject: context.subject })
      break;
    default:
      res.render('select.hbs', { subject: context.subject, Array: [context.nooption] })
      break;
  }
})
console.log("--- cały obiekt context")
console.log(context)
console.log("--- tablica fields z obiektu context")
console.log(context.fields)
