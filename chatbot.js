
const express = require("express");
const bodyParser = require("body-parser");
const restService = express();

restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());
restService.post("/chatbot", function (req, res) {
   if (req.body.queryResult.parameters.account_info == "contact number"
    && req.body.queryResult.parameters.account_info) {
    var speech = "999999999";
  }
  else if (req.body.queryResult.parameters.account_info == "account number"
    && req.body.queryResult.parameters.account_info) {
    var speech = "9999999999999";
  }
  else if (req.body.queryResult.parameters.account_info == "DOB"
    && req.body.queryResult.parameters.account_info) {
    var speech = "24 NOV 1996";
  }
  else if (req.body.queryResult.parameters.account_info == "address"
    && req.body.queryResult.parameters.account_info) {
    var speech = " 219 - A , Meditab Software PVT LTD. ,Ahmedabad.";
  }
  return res.json({
    fulfillmentText: "fulfillmentText",
    fulfillmentMessages: [{
      simpleResponses: {
        simpleResponses: [{
          "textToSpeech": "textToSpeech",
          "displayText": speech
        }]
      }
    }],
    source: "webhook-sample"
  });
});