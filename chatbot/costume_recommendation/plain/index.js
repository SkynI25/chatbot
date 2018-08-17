const callSendAPI = require('../../call_send_api');
const uppertwo = require("../uppertwo");
const lowertwo = require("../lowertwo");
const result = require('../result');
const result2 = require('../result2');


const e = function (psid, payload) {
  let response;
  if (payload.length === 3) {
    if (payload[payload.length - 1] === "a") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "원하시는 가격대가 있다면요?",
            "buttons": [{
                "type": "postback",
                "title": "2만원 이하",
                "payload": `["a", "y", "a", "a"]`
              },
              {
                "type": "postback",
                "title": "2만원 이상",
                "payload": `["a", "y", "a", "b"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    }
  } if (payload[payload.length - 1] === "a") {
    response = result(psid, payload);
  } else {
    response = result2(psid, payload);
  }
  return response;
}

module.exports = e;
