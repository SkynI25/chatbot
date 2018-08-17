const callSendAPI = require('../../call_send_api');
const cloth2 = require('../cloth2');

const e = function (psid, payload) {
  let response;
  if (payload.length === 4) {
    if (payload[payload.length - 1] === "b") {
      response = {
        "text" : "링크를 클릭하면 당신이 찾는 옷이 기다리고 있어요 :)"
      }
      callSendAPI(psid, response);
    }
  } if (payload[payload.length - 1] === "b") {
    response = cloth2(psid, payload);
  } 

  return response;
}

module.exports = e;