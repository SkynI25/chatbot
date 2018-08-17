const callSendAPI = require('../call_send_api');
const pants = require("./pants");
const skirt = require("./skirt");

const e = function (psid, payload) {
  let response;
  if (payload.length === 1) {
    if (payload[payload.length - 1] === "의상추천") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "어떤 의상을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "치마",
                "payload": `["의상추천", "치마"]`
              },
              {
                "type": "postback",
                "title": "바지",
                "payload": `["의상추천", "바지"]`
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