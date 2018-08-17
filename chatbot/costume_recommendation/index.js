const pants = require("./pants");
const skirt = require("./skirt");

e = function (payload) {
  let response;
  if (payload.length == 1) {
    if (payload[payload.length - 1] === "의상추천") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "어떤 의상을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "치마",
                "payload": `["의상추천", "치마"]`
              },
              {
                "type": "postback",
                "title": "바지",
                "payload": `["의상추천", "바지"]`
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