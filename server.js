var express = require('express');
var path    = require("path");
var app = express();
var mongojs = require('mongojs');
var db = mongojs('todolist', ['todolist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname = './public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/todoList', function(req, res) {

  db.todolist.find(function(err, docs) {
    res.json(docs);
  });

});

app.post('/todoList', function(req, res) {
  db.todolist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/todoList/:id', function(req, res) {
  var id = req.params.id;
  db.todolist.remove({ _id: mongojs.ObjectId(id) }, function(err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
console.log("Running Node Server...");
