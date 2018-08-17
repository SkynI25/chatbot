const callSendAPI = require('../../call_send_api');
const final = require('../final');
const final2 = require('../final2');

const e = function (psid, payload) {
  let response;

  if (payload.length === 4) {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "결과가 마음에 드시나요?",
            "buttons": [{
                "type": "postback",
                "title": "예",
                "payload": `["y"]`
              },
              {
                "type": "postback",
                "title": "아니오",
                "payload": `["n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
  }
  if (payload[payload.length - 1] === "y") {
    response = final(psid, payload);
  } else {
    response = final2(psid, payload);
  }
  return response;
}

module.exports = e;