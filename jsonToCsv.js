const fs = require('fs');
require('dotenv').config();

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const request = require('request-promise');

var api_url = 'https://paystack.zendesk.com/api/v2/macros/active.json?active=true';

async function fetchData() {
  var jsonData = [];

  do {
    const options = {
      method: 'GET',
      url: api_url,
      headers: {
        'Authorization': 'Basic ' + process.env.ZENDESK_TOKEN,
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await request(options);
      jsonData.push(...JSON.parse(response).macros); // Assign the response macros to jsonData
      api_url = JSON.parse(response).next_page;
    } catch (error) {
      throw new Error(error);
    }
  } while (api_url !== null);
  
  return jsonData;
}

async function writeDataToCsv() {
  try {
    const jsonData = await fetchData();

    if (jsonData.length > 0) {
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

      await csvWriter.writeRecords(jsonData);
      console.log('CSV file created successfully!');
    } else {
      console.log('jsonData is empty. No data to write to CSV.');
    }
  } catch (error) {
    console.error(error);
  }
}

writeDataToCsv();