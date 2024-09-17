const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios')


//settings
app.use(express.static('./frontend'));
app.set("port", process.env.PORT || 80);



//routes
app.use(require('./routes/index'))

//starting the server
app.listen((app.get('port')), function () {
    console.log('listening on 80')
})

const url = `doki-doki.genr234.com`; 
const interval = 30000;

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}


setInterval(reloadWebsite, interval);
