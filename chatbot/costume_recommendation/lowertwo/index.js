const callSendAPI = require('../../call_send_api');
const request = require('request');

const e = function (psid, payload) {
  let response;
  response = { "text": `당신에게 가장 적합한 옷을 찾는 중입니다.\n잠시만 기다려주세요.`};

  request({
    "uri": "localhost:3000/data", // url 을 지정해주므로 페이스북에서 지정된 형식으로 요청에 대한 답을 해줌
    "qs": { "access_token": "EAAPoQa1r4CkBAFrZCZBIRmdfqzz8TvBjPWRwVQpxXhgKfCqJ52DhDSGjWDmnYVZCXl4SQA1lqZCHolrV7w7NTYckYE2Nwf1JsPoZBaFKS2BR0Sk3xDepuBiIuAZA2uAyEZAmuYqUtqW2iJUrODNAX3XCd4aGd5vJQbZAHYSi3lORvwZDZD" },
    "method": "POST",
    "json": payload
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 

  callSendAPI(psid, response);
  return response;
}

module.exports = e;