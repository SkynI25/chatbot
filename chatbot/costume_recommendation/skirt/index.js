const callSendAPI = require('../../call_send_api');
const e = function (psid, payload) {
  let response;
  if (payload.length === 2) {
    if (payload[payload.length - 1] === "치마") {
      
      let aaa = JSON.parse(JSON.stringify(payload))
      aaa.push("롱")
      let bbb = JSON.parse(JSON.stringify(payload))
      bbb.push("미니")
      
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "어떤 의상을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "롱",
                "payload": JSON.stringify(aaa)
              },
              {
                "type": "postback",
                "title": "미니",
                "payload": JSON.stringify(bbb)
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
