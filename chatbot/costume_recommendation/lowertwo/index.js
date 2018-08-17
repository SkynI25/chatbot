const cloth = require('../cloth');

const e = function (psid, payload) {
  let response;

  // request({
  //   "uri": "서버주소/data", // url 을 지정해주므로 페이스북에서 지정된 형식으로 요청에 대한 답을 해줌
  //   "qs": { "access_token": "EAAPoQa1r4CkBAFrZCZBIRmdfqzz8TvBjPWRwVQpxXhgKfCqJ52DhDSGjWDmnYVZCXl4SQA1lqZCHolrV7w7NTYckYE2Nwf1JsPoZBaFKS2BR0Sk3xDepuBiIuAZA2uAyEZAmuYqUtqW2iJUrODNAX3XCd4aGd5vJQbZAHYSi3lORvwZDZD" },
  //   "method": "POST",
  //   "json": payload
  // }, (err, res, body) => {
  //   if (!err) {
  //     console.log('message sent!')
  //   } else {
  //     console.error("Unable to send message:" + err);
  //   }
  // });

  response = cloth(psid, payload);

  return response;
}

module.exports = e;
