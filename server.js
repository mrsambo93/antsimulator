const express = require('express')
const app = express()
const morgan = require('morgan')

app.get('/', function(req,res) {
  res.sendFile('./ants.html');
});

app.use(morgan('tiny'));
app.use(express.static('scripts'))

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('App listening on port 8080')
});
