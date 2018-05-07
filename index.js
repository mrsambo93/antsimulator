const express = require('express')
const app = express()
const morgan = require('morgan')

app.get('/ants', function(req,res) {
  res.sendFile('/home/mrsambo/Documenti/infovis/Homework1/ants.html');
});

app.use(morgan('tiny'));
app.use(express.static('scripts'))

app.listen(8080, function() {
  console.log('App listening on port 8080')
});
