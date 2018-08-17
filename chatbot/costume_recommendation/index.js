const callSendAPI = require('../call_send_api');
const black = require("./black");
const white = require("./white");

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
                "title": "어두운 계열",
                "payload": `["a", "n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    } else if (payload[payload.length - 1] === "b") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "밝은 계열이 좋으세요, 어두운 계열이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "밝은 계열",
                "payload": `["b", "y"]`
              },
              {
                "type": "postback",
                "title": "어두운 계열",
                "payload": `["b", "n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    } else if (payload[payload.length - 1] === "c") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "밝은 계열이 좋으세요, 어두운 계열이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "밝은 계열",
                "payload": `["c", "y"]`
              },
              {
                "type": "postback",
                "title": "어두운 계열",
                "payload": `["c", "n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    } else if (payload[payload.length - 1] === "d") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "밝은 계열이 좋으세요, 어두운 계열이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "밝은 계열",
                "payload": `["d", "y"]`
              },
              {
                "type": "postback",
                "title": "어두운 계열",
                "payload": `["d", "n"]`
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    }
  }
  if (payload[payload.length - 1] === "y") {
    response = white(psid, payload);
  } else {
    response = black(psid, payload);
  }
  return response;
}

module.exports = e;