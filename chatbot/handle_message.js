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
                  "title": "회사에서 입을 옷",
                  "payload": `["a"]`
                },
                {
                  "type": "postback",
                  "title": "소개팅할때",
                  "payload": `["b"]`
                }
              ]
            }
          }
        }
        
        callSendAPI(sender_psid, response);    
        
        response = {
          "attachment": {
            "type": "template",
            "payload": {
              "template_type":"button",
              "text":"(옵션들)",
              "buttons":[
                {
                  "type": "postback",
                  "title": "데이트 할 때",
                  "payload": `["c"]`
                },
                {
                  "type": "postback",
                  "title": "일상에서 편하게",
                  "payload": `["d"]`
                }
              ]
            }
          }   
        }
          
        callSendAPI(sender_psid, response); 
        
        console.log(JSON.stringify(response, null, 4))
      } else {
        // Creates the payload for a basic text message, which
        // will be added to the body of our request to the Send API
        response = {
          "text": `당신이 보낸 메시지: "${received_message.text}"` // 사용자에게 보내는 메시지, 추후 자연어 처리(NLP)를 통해 제어문으로 어떻게 해줄지 선택하면 됨.
        }
        
        callSendAPI(sender_psid, response);    
      }
  
    } else if (received_message.attachments) {
    
      // Gets the URL of the message attachment
      let attachment_url = received_message.attachments[0].payload.url;

    }
};

module.exports = handleMessage;