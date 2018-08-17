const callSendAPI = require('../../call_send_api');
const result = require('../result');
const result2 = require('../result2');

const e = function (psid, payload) {
    let response;

    if (payload.length === 4) {
    if (payload[payload.length - 1] === "b") {
      response = {
        "text" : "https://smartstore.naver.com/iamieun/products/3167311788?NaPm=ct%3Djkxqs0z4%7Cci%3D5d0c4e3695de08ffd3078ecdd085a8942d0b540e%7Ctr%3Dslsl%7Csn%3D323635%7Cic%3D%7Chk%3D6add83531bf14c00f2f3d96e0b04c67b398b7bdf"
      }
      callSendAPI(psid, response);
    }
  } if (payload[payload.length - 1] === "b") {
    response = result2(psid, payload);
  } else {
    response = result(psid, payload);  
  }
    return response;
}

module.exports = e;