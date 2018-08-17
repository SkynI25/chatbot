const callSendAPI = require('./call_send_api');

const handleMessage = function(sender_psid, received_message) {
    let response;
  
    // Checks if the message contains text
    if (received_message.text) {
      
      if (received_message.text === "의상추천") {
        response = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type":"button",
              "text":"어떤 의상을 추천해드릴까요?",
              "buttons":[
                {
                  "type": "postback",
                  "title": "ㅁ",
                  "payload": `["의상추천", "치마"]`
                },
                {
                  "type": "postback",
                  "title": "ㄴ",
                  "payload": `["의상추천", "바지"]`
                },
                {
                  "type": "postback",
                  "title": "ㄷ",
                  "payload": `["의상추천", "바지"]`
                },
                {
                  "type": "postback",
                  "title": "ㄹ",
                  "payload": `["의상추천", "바지"]`
                }
              ]
            }
          }
        }
      } else {
        // Creates the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        response = {
          "text": `당신이 보낸 메시지: "${received_message.text}"` // 사용자에게 보내는 메시지, 추후 자연어 처리(NLP)를 통해 제어문으로 어떻게 해줄지 선택하면 됨.
        }
      }
  
    } else if (received_message.attachments) {
    
      // Gets the URL of the message attachment
      let attachment_url = received_message.attachments[0].payload.url;

    } 
    
    // Sends the response message
    callSendAPI(sender_psid, response);    
};

module.exports = handleMessage;