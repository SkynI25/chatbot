const request = require('request');

const callSendAPI = function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v2.6/me/messages", // url 을 지정해주므로 페이스북에서 지정된 형식으로 요청에 대한 답을 해줌
      "qs": { "access_token": "EAAPoQa1r4CkBAFrZCZBIRmdfqzz8TvBjPWRwVQpxXhgKfCqJ52DhDSGjWDmnYVZCXl4SQA1lqZCHolrV7w7NTYckYE2Nwf1JsPoZBaFKS2BR0Sk3xDepuBiIuAZA2uAyEZAmuYqUtqW2iJUrODNAX3XCd4aGd5vJQbZAHYSi3lORvwZDZD" },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
  }

  module.exports = callSendAPI;