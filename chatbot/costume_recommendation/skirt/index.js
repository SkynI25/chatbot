e = function (payload) {
  console.log(payload.length);
  console.log(payload[payload.length - 1]);

  let response;
  if (payload.length == 2) {
    if (payload[payload.length - 1] === "치마") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "어떤 의상을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "롱",
                "payload": `["의상추천", "치마", "롱"]`
              },
              {
                "type": "postback",
                "title": "미니",
                "payload": `["의상추천", "치마", "미니"]`
              }
            ]
          }
        }
      }
    }
  }
  return response;
}

module.exports = e;