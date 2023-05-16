const fs = require('fs');
require('dotenv').config();

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Bring in JSON object
const jsonData = [];

// Check that your data is represented properly
console.log(typeof jsonData);

// Define the CSV writer with the desired configuration
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
      { id: 'title', title: 'Title' },
      { id: 'id', title: 'ID' },
      { id: 'position', title: 'Position' },
      { id: 'url', title: 'URL' },
      { id: 'created_at', title: 'Created at' },
      { id: 'updated_at', title: 'Updated at' },
      { id: 'description', title: 'Description' }
    ]
  });
  
  try {
    if (jsonData.length > 0) {
      csvWriter
        .writeRecords(jsonData)
        .then(() => console.log('CSV file created successfully!'));
    } else {
      console.log('jsonData is empty. No data to write to CSV.');
    }
  } catch (err) {
    console.error(err);
  }
