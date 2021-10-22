// import Papa from 'papaparse';
import '../data/ireland/carlow.csv';
// import * as fs from "fs";
// import csv from "csvtojson";
// import {csvToJson} from "convert-csv-to-json";
// import csv from "csv";

// var results = Papa.parse('carlow.csv', {
//     header: true
// });
// console.log(results)

// Papa.parse(carlow.csv.files, {
//     complete: function(results) {
//         console.log(results);
//     }
// });

// CODE QUI FONCTIONNE
// 2eme essai
// var csvText = `obdb_id,name,brewery_type,street,address_2,address_3,city,state,county_province,postal_code,website_url,phone,country,longitude,latitude,tags
//  carlow-brewing-company-bagenalstown,Carlow Brewing Company,micro,Muine Bheag Business Park,Royal Oak Rd,Moneybeg,Bagenalstown,,Carlow,R21 DR77,http://www.carlowbrewing.com/,3.536E+11,Ireland,-6.9783782,52.6965818,`;
//
// // var csv = require('csv');
// csv.parse(csvText, {columns: true}, function(err, data){
//     console.log(JSON.stringify(data, null, 2));
// });

// 1er essai
// var file = carlow.csv;
// // Parse local CSV file
// Papa.parse(file, {
//     complete: function(results) {
//         console.log("Finished:", results.data);
//     }
// });