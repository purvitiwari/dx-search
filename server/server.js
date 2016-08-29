const express = require('express');
const path = require('path');
const app = express();

const Sequelize = require('sequelize');
const dbConfig = require('../config/dbConfig.js');


const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected!');
  })
  .catch((err) => {
    console.log('Error', err);
  })
  .done();


app.get('/dxsearch', (request, response) => {
  const inputCity = request.query.city;
  const inputArea = request.query.area;
  const inputTest = request.query.test;
  const searchCity = inputCity.concat('%');
  const searchArea= inputArea.concat('%');
  const searchTest = inputTest.concat('%');
  sequelize
    .query('SELECT * FROM allCenters WHERE `city` like :search_city AND `area` like :search_area', {
      replacements: {
        search_area: searchArea,
        search_city: searchCity,
        search_test: searchTest
      },
      type: sequelize.QueryTypes.SELECT
    })
    .then((myTableRows) => {
      response.end(JSON.stringify({ result: myTableRows }));
      console.log(myTableRows);
    })
    .catch((err) => {
      console.log('Error!', err);
      response.end(JSON.stringify(err));
    })
    .done();
});


app.engine('html', require('ejs').renderFile);

app.use(express.static('./dist'));
app.set('views', path.join(__dirname, '../views'));

app.get('/', (request, response) => {
  response.render('index.html');
});

var server = app.listen(3000, function() {
var host = server.address().address;
var port = server.address().port;

console.log("Server %s:%s working", host, port);
})
