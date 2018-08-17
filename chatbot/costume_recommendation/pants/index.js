e = function (payload) {
  let response;
  if (payload.length == 2) {
    if (payload[payload.length - 1] === "바지") {
      response = {
        "attachment": {
          "type": "template",
          "payload": {
            "template_type": "button",
            "text": "어떤 의상을 추천해드릴까요?",
            "buttons": [{
                "type": "postback",
                "title": "반바지",
                "payload": `["의상추천", "바지", "반바지"]`
              },
              {
                "type": "postback",
                "title": "긴바지",
                "payload": `["의상추천", "바지", "긴바지"]`
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