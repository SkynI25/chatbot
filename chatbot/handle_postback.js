const handlePostback = function(psid, payload) { // 이미지 밑에 버튼,이 있고 이를 선택할지 말지를 처리하는 부분
    console.log(psid)
    console.log(JSON.stringify(payload, null, 4))
}

module.exports = handlePostback;