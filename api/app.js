const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 8080;

//------------------------------------------------------------------------------
const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: "Zh4QqPEoOYWIZwE-NyTvnRpYMBO9DhwbZs6iaIDFfmeA"
  }),
  url: "https://gateway.watsonplatform.net/tone-analyzer/api"
});
const text =
  "I'm selfish, impatient and a little insecure. I make mistakes," + 
 " I am out of control and at times hard to handle. But if you can't handle me at my worst,"
  + "then you sure as hell don't deserve me at my best.";
const toneParams = {
  toneInput: { text: text },
  contentType: "application/json"
};
toneAnalyzer
  .tone(toneParams)
  .then(toneAnalysis => {
    //var data = JSON.stringify(toneAnalysis, null, 2);
    var emotions = toneAnalysis["result"].document_tone["tones"];
    for(var i = 0; i < emotions.length; i++){
      var data =  JSON.stringify(emotions[i].tone_name,null,2);
      console.log(data);
    }
  })
  .catch(err => {
    console.log("error:", err);
  });
  //aright so i need this functionality in my react project 
  //this piece of code hits up the api and gets back a JSON 
  //how do i do this 
  

//------------------------------------------------------------------------------

// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json())

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));
// /api/application-configuration/

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
