const callSendAPI = require('../../call_send_api');

const e = function (psid, payload) {
    let response;

    if (payload.length === 1) {
      if (payload[payload.length - 1] === "y") {
        response = {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "button",
                "text": "다른 옷을 추천해드릴까요?",
                "buttons": [{
                    "type": "postback",
                    "title": "예",
                    "payload": `["y", "y"]`
                  },
                  {
                    "type": "postback",
                    "title": "아니오",
                    "payload": `["y", "n"]`
                  }
                ]
              }
            }
          }
      callSendAPI(psid, response);
  } else if(payload[payload.length - 1] === "n") {
    response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "다른 옷을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "예",
                "payload": `["n", "y"]`
              },
              {
                "type": "postback",
                "title": "아니오",
                "payload": `["n", "n"]`
              }
            ]
          }
        }
      }
  callSendAPI(psid, response);
}
}
    return response;
}

module.exports = e;