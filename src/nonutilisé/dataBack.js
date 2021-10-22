const csvParser = require('csv-parser');
const fs = require('fs');
// fs -> package de node pour le back-end
// ouvrir flux csv dans un browser

const results = [];

fs.createReadStream('.././data/england/east-sussex.csv')
    .pipe(csvParser())
    .on('data', function(dataRow){
        results.push(dataRow);
    })
    .on('end', function() {
        console.log(results);
    })

fs.createReadStream('.././data/england/west-sussex.csv')
    .pipe(csvParser())
    .on('data', function(dataRow){
        results.push(dataRow);
    })
    .on('end', function() {
        console.log(results);
    })

fs.createReadStream('.././data/ireland/carlow.csv')
    .pipe(csvParser())
    .on('data', function(dataRow){
        results.push(dataRow);
    })
    .on('end', function() {
        console.log(results);
    })