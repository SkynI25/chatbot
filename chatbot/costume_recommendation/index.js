const pants = require("./pants");
const skirt = require("./skirt");

e = function (payload) {
  let response;
  if (payload.length === 1) {
    if (payload[payload.length - 1] === "a") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "밝은 계열이 좋으세요, 어두운 계열이 좋으세요?",
            "buttons": [{
                "type": "postback",
                "title": "밝은 계열",
                "payload": ["의상추천", "a", "y"] 
              },
              {
                "type": "postback",
                "title": "어두운 계열",
                "payload": ["의상추천", "a", "n"]
              }
            ]
          }
        }
      }
    }
  } else {
    response = pants(payload);
    if (!response) {
      response = skirt(payload);
    }
  }
  return response;
}

module.exports = e;