const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const url = require('url');

const PORT = 3000
const app = express();
app.use(cors())

app.use(bodyParser.json())

// Provide your <dbusername>, <dbpassword> and <dbname>

app.get('/', function (req, res) {
  res.send('connected to server')
})
const data = require('./data.json')

app.get('/games', function (req, res) {
  res.header("Content-Type", 'application/json');
  res.send(JSON.stringify(data));
})


app.listen(PORT, function () {
  console.log('server running on localhost' + PORT)
})

