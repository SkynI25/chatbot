const costumeRecommendation = require("./costume_recommendation");

const handlePostback = function (psid, payload) { // 이미지 밑에 버튼,이 있고 이를 선택할지 말지를 처리하는 부분
    let response;

    let payloadData = JSON.parse(payload.payload);
    
    response = costumeRecommendation(psid, payloadData);
    // if (!response)
    //     eieieieiei

}

module.exports = handlePostback;