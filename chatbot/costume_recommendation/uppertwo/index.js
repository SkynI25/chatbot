const callSendAPI = require('../../call_send_api');
const e = function (psid, payload) {
    let response;
    response = { "text": `당신에게 가장 적합한 옷을 찾는 중입니다.\n + 잠시만 기다려주세요.`};
    callSendAPI(psid, response);
    return response;
}

module.exports = e;
