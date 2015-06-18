$(function (){

  setInterval(function () {
//     $messageList.empty();
     $.ajax({
    type: 'GET',
    url: '/chatrooms/' + $room.val(),
    success: messageAdd,
    error: function(message){
      alert("didn't work, dude");
    }
  });


  },1000);

  var $room = $('#room');
  var $messageInputBox = $('#message');
  var $name = $('#name');
  var $messageList = $('#messageList');
  var $addmessage = $('#add-message');

  function messageAdd(data){

    $.each(data.filter(newMessage), function(i, message){
      $messageList.append('<li>Name: ' + message.name + ', message: ' + message.message + '</li>');
    });
  }

  function newMessage(message){
    if ($('li').length < message.id){
      return true;
    }
  }

  // $.ajax({
  //   type: 'GET',
  //   url: '/' + $room.val(),
  //   success: messageAdd,
  //   error: function(message){
  //     alert("didn't work, dude");
  //   }
  // });


  // setInterval(function(){
  $addmessage.on('click', function(event){
    sendMessage();
  });
  //   },500);




  function sendMessage(){
    var message = {
      name: $name.val(),
      message: $messageInputBox.val()
    };


    $.ajax({
      type: 'POST',
      contentType: "application/json",
      url: '/chatrooms/' + $room.val(),
      data: JSON.stringify(message),
      success: messageAdd,
      error: function(){
      alert("didn't work, dude");
     }
    });
  }





//      $messageList.empty();

    // var message = {
    //   name: $name.val(),
    //   message: $messageInputBox.val()
    // };


    // $.ajax({
    //   type: 'POST',
    //   contentType: "application/json",
    //   url: '/' + $room.val(),
    //   data: message,
    //   success: messageAdd,
    //   error: function(){
    //    alert("didn't work, dude");
    //  }
    // });
});