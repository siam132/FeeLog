//------------------------------------------------------------------------------
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
    // const text =
    // "I'm selfish, impatient and a little insecure. I make mistakes," + 
    // " I am out of control and at times hard to handle. But if you can't handle me at my worst,"
    // + "then you sure as hell don't deserve me at my best.";
    const toneParams = {
        toneInput: { text: contentText },
        contentType: "application/json"
    };

    return toneAnalyzer
        .tone(toneParams)
        .then(toneAnalysis => {
            var emotions = toneAnalysis["result"].document_tone["tones"];
            let tones = [];
            for(var i = 0; i < emotions.length; i++){
                var data =  JSON.stringify(emotions[i].tone_name,null,2);
                console.log(data);
                tones.push(data);
            }
            return tones;
        })
        .catch(err => {
            console.log("error:", err);
        });
}
  
module.exports = { analyzeTone };

//------------------------------------------------------------------------------