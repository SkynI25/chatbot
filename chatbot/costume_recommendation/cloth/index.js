const callSendAPI = require('../../call_send_api');
const result = require('../result');
const result2 = require('../result2');

const e = function (psid, payload) {
    let response;

    if (payload.length === 4) {
    if (payload[payload.length - 1] === "a") {
      response = {
        "text" : "https://smartstore.naver.com/immood/products/2596770152?NaPm=ct%3Djkxqtlaw%7Cci%3D02ce2c6307c872a792c62e1e8468d84da393ca4f%7Ctr%3Dslsl%7Csn%3D342127%7Cic%3D%7Chk%3D0180544fbe4dafee6f9b5384cdbfd5cd6f19f605"
      }
      callSendAPI(psid, response);
    }
  } if (payload[payload.length - 1] === "a") {
    response = result(psid, payload);
  } else {
    response = result2(psid, payload);
  }
    return response;
}

module.exports = e;