var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')
const async = require('express-async-await')

dotenv.config();

//Create variables for API call
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY;
const OF = 'json';
const MODEL = 'general';
const LANG = 'en';

const app = express()

app.use(express.static('dist'))

console.log(__dirname)
console.log(`key = ${API_KEY}`);

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('dist/index.html'))
})

app.get('/response/:text', (req, res) => {
const text = req.params.text;
console.log(text);
const headers = {
  "Content-Type": "application/json",
}
const data = {
    'txt': text,
    'lang': LANG,
    'key': API_KEY,
    'of': OF,
    'model': MODEL
}

fetch(BASE_URL, { method: 'POST', headers: headers, body: JSON.stringify(data)})
  .then((res) => {
      console.log(res.url);
     return res.json()
})
.then((json) => {
   // Do something with the returned data.
  console.log(json);
  res.send(JSON.stringify(json))

});

})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
