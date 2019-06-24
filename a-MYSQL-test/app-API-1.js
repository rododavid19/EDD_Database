const express = require('express');
const app = express();
var RecipeGetter = require('./getRecipes-DB');
const bodyParser = require('body-parser');


const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
 // allow// some legacy browsers (IE11, various SmartTVs) choke on 204
}


var reqBody = "";
app.use(cors(corsOptions))


app.use(bodyParser.json());
//lrequire('dotenv').config();



// TODO: use req to check what client sent to server. i.e. check if a serial is included
app.route('/api/all').get((req, res) => {

  RecipeGetter.getAll(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/serial').get((req, res) => {
  // TODO: insert checker for req and make sure that serial is included
  //reqBody = 1;
  //console.log(reqBody);


  RecipeGetter.getSerial(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});

app.route('/api/saleDate').get((req, res) => {
  // TODO: insert checker for req and make sure that serial is included

  RecipeGetter.getAll(function (err, rows) {

    if(err) {
      res.status(400).json(err);
    }
    else
    {
      res.json(rows);
    }

  });
});



app.set('port', 3000);
app.listen(3000); // 8080 for Google AE

module.exports = 'ServerRunner';
