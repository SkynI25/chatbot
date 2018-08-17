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
            "text": "링크를 클릭하면 당신이 찾는 옷이 기다리고 있어요 🙂\n\nhttps://smartstore.naver.com/iamieun/products/3167311788?NaPm=ct%3Djkxqs0z4%7Cci%3D5d0c4e3695de08ffd3078ecdd085a8942d0b540e%7Ctr%3Dslsl%7Csn%3D323635%7Cic%3D%7Chk%3D6add83531bf14c00f2f3d96e0b04c67b398b7bdf\n\n결과가 마음에 드시나요?",
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
  if (payload[payload.length - 1] === "n") {
    response = final2(psid, payload);
  } else {
    response = final(psid, payload);
  }
  return response;
}

module.exports = e;