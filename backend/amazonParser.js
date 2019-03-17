//const csv = require('csv-parser')
//const fs = require('fs')
//const results = [];
//const mongoose = require('mongoose')

var csv = require('csv');
const Product = require('./models/product/product.model');
const mongoose = require('mongoose');
const productLogic = require('./models/product/product.logic');

mongoose.connect("mongodb://localhost:27017/superNav", () => { })
  .then(() => {
    console.log('Connected to database!');
    var obj = csv();
    const MyData = [];
    obj.from.path('amazon.csv').to.array(function (data) {
      for (var index = 0; index < data.length; index++) {

        var randomPrice = Math.floor((Math.random() * 200) + 1); //Randomizing price
        var randomQuantity = Math.floor((Math.random() * 200) + 1);//Randomizing quantity
        var tmp = { name: data[index][1], price: randomPrice, quantity: randomQuantity, category: data[index][0] };
        MyData.push({
          name: data[index][1],
          price: randomPrice,
          quantity: randomQuantity,
          category: data[index][0]
        });
      }
      let array = [];
      let count = 0;
      let timeOutCout = 0;
      setTimeout(() => {
        MyData.forEach(newProduct => {
          array.push(productLogic.createProduct(newProduct));
          count += 1;
          if (count % 10 == 0) {
            setTimeout(() => {
              Promise.all(array).then();
            }, 2000 * timeOutCout);
            array = [];
            timeOutCout += 1;
          }
        });
      }, 6000);
    });
  })
  .catch((error) => {
    console.log('error');
    console.log('Connection to database failed!');
  });
