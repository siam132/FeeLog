const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

// one time setup
const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: "Zh4QqPEoOYWIZwE-NyTvnRpYMBO9DhwbZs6iaIDFfmeA"
  }),
  url: "https://gateway.watsonplatform.net/tone-analyzer/api"
});

function analyzeTone(contentText) {
  const toneParams = {
    toneInput: { text: contentText },
    contentType: "application/json"
  };

  return toneAnalyzer
    .tone(toneParams)
    .then(toneAnalysis => {
      var emotions = toneAnalysis["result"].document_tone["tones"];

      let tones = [];
      for (var i = 0; i < emotions.length; i++) {
        var data = JSON.stringify(emotions[i].tone_name, null, 2);

        tones.push(data);
      }
      return tones;
    })
    .catch(err => {
      console.log("error:", err);
    });
}

module.exports = { analyzeTone };
