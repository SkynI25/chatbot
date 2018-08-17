const callSendAPI = require('../../call_send_api');

const e = function (psid, payload) {
    let response;

    response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "제목",
                    "image_url": "../../../public/images/26.jpg",
                    "subtitle": "부제목",
                    "default_action": {
                        "type": "web_url",
                        "url": "https://smartstore.naver.com/immood/products/2596770152?NaPm=ct%3Djkxqtlaw%7Cci%3D02ce2c6307c872a792c62e1e8468d84da393ca4f%7Ctr%3Dslsl%7Csn%3D342127%7Cic%3D%7Chk%3D0180544fbe4dafee6f9b5384cdbfd5cd6f19f605",
                        "messenger_extensions": TRUE,
                        "webview_height_ratio": "COMPACT"
                    },
                }, ]
            }
        }
    }
    callSendAPI(psid, response);
    return response;
}

module.exports = e;