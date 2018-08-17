const callSendAPI = require('../call_send_api');
const pants = require("./pants");
const skirt = require("./skirt");

const e = function (psid, payload) {
  let response;
  if (payload.length === 1) {
    if (payload[payload.length - 1] === "a") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "밝은 계열이 좋으세요, 어두운 계열이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "밝은 계열",
                "payload": `["a", "y"]`
              },
              {
                "type": "postback",
                "title": "밝은 계열",
                "payload": `["a", "n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    }
  } else {
    response = pants(psid, payload);
    if (!response) {
      response = skirt(psid, payload);
    }
  }
  return response;
}

module.exports = e;