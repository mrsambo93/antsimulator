const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'));
app.use(express.static(__dirname + 'scripts'))

var port = process.env.PORT || 8080;

app.get('/', function(req,res) {
  res.sendFile(__dirname + 'ants');
});

app.listen(port, function() {
  console.log('App listening on port 8080')
});
