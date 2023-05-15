const json2csv = require('json2csv').parse;
const fs = require('fs');
dotenv = require('dotenv').config();


// Example JSON object
const jsonData = [process.env.JSON_RESPONSE];

// Convert JSON to CSV
const csvData = json2csv(jsonData);

// Write CSV to file
fs.writeFile('output.csv', csvData, (err) => {
  if (err) throw err;
  console.log('CSV file generated successfully!');
});
