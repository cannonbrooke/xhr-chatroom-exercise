

var express = require('express');
var router = express.Router();
var counter = 1;

var chatroomModule = require('../lib/chatroom.js');

module.exports = router;

router.use(function(req, res, next){
  next();

});

router.route('/:chatroom')
  .post(function (req, res){

    var message = {
      id: counter +=1,
      timestamp: new Date(),
      name: req.body.name,
      message: req.body.message

    };
  })
  .get(function (req, res){

    var chatroomName = req.params.chatroom;
    var messages = chatroomModule.readChatroom(chatroomName);

    res.json(messages);
  });