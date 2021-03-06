const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


//MONGGOOSE
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>
{
    if(err)
    {
        console.log('Cannot connect to Database: '+ err);
    }
    else
    {
        console.log('Connected to: ' + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

//creating routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });
  
  app.listen(8080, () =>
{
    console.log('Listening to port 8080');
});