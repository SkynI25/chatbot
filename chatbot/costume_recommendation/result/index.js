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
            "text": "링크를 클릭하면 당신이 찾는 옷이 기다리고 있어요 🙂\n\nhttps://smartstore.naver.com/immood/products/2596770152?NaPm=ct%3Djkxqtlaw%7Cci%3D02ce2c6307c872a792c62e1e8468d84da393ca4f%7Ctr%3Dslsl%7Csn%3D342127%7Cic%3D%7Chk%3D0180544fbe4dafee6f9b5384cdbfd5cd6f19f605\n\n결과가 마음에 드시나요?",
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
  console.log(payload);
  if (payload[payload.length - 1] === "y") {
    response = final(psid, payload);
  } else {
    response = final2(psid, payload);
  }
  return response;
}

module.exports = e;