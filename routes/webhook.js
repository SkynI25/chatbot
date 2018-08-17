var express = require('express');
var router = express.Router();

const handleMessage = require('../chatbot/handle_message');
const handlePostback = require('../chatbot/handle_postback');

// var bodyParser = require('body-parser')
// router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({
//     extended: true
// }));

// var mysql = require('mysql');

// var mysqlPool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '111111',
//     database: 'kitae'
// });

// Creates the endpoint for our webhook 
router.post('/', (req, res) => { // 사용자들에게 요청이 들어왔을 때 어떻게 처리를 할지 정하는 부분

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id; // psid 확인하는 부분, webhook_event 부분 페이스북 api에서 한번 더 확인해보자.
      console.log('Sender PSID: ' + sender_psid); // 누가 보냈는지 확인할 수 있음

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message); // 메시지를 어떻게 처리 할지
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
router.get('/', (req, res) => { // 인증 부분만 다룸

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "asdkfjdashfuiwhoiu" // 우리 서버인지 확인해주는 용도, 인증부분 담당

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// router.post('/data', function (req, res) {
//   var payload = req.body.payload;
//   var sql = "SELECT image_url where dress_code = '" + payload[0] + "' and dress_color = '" + payload[1] + "' and dress_point  = '" + payload[2] + "' and dress_price = '" + payload[3] + "';";
//   mysqlPool.getConnection(function (err, conn) {
//       if (err) throw err;
//       conn.query(sql, function (err, datas, fields) {
//         let webhook_event = entry.messaging[0];
//       let sender_psid = webhook_event.sender.id; // psid 확인하는 부분, webhook_event 부분 페이스북 api에서 한번 더 확인해보자.
//           if (err) {
//               conn.release();
//               console.log(err);
//               return;
//           }
//           res.respond("ok");
//           handleMessage2(sender_psid, webhook_event.message); // 메시지를 어떻게 처리 할지
//           conn.release();
//       });
//   });
// });

module.exports = router;