const callSendAPI = require('../../call_send_api');
const plain = require("../plain");
const point = require("../point");

const e = function (psid, payload) {
  let response;
  if (payload.length === 2) {
    if (payload[payload.length - 1] === "n") {
      
      let aaa = JSON.parse(JSON.stringify(payload))
      aaa.push("a")
      let bbb = JSON.parse(JSON.stringify(payload))
      bbb.push("b")
      
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "무난한 옷이 좋으세요, 포인트 있는 옷이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "무난한 옷",
                "payload": JSON.stringify(aaa)
              },
              {
                "type": "postback",
                "title": "포인트 있는 옷",
                "payload": JSON.stringify(bbb)
              }
            ]
          }
        }
      }
      callSendAPI(psid, response);
    }
  } else {
    response = point(psid, payload);
      if (!response) {
        response = plain(psid, payload);
      }
  }
  return response;
}

module.exports = e;
