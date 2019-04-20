var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  roomNames: [],

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.render);

    Parse.readAll((data) => {
      for (let i = 0; i < data.results.length; i ++) {
        if (!RoomsView.roomNames.includes(data.results[i].roomname) && data.results[i].roomname && data.results[i].roomname.length < 20) {
          RoomsView.roomNames.push(data.results[i].roomname);
        }
      }
      for (let i = 0; i < RoomsView.roomNames.length; i ++) {
        RoomsView.$select.append($('<option value=' + [i] + '> ' + RoomsView.roomNames[i] + ' </option>'));
      }
    });

    
  },

  render: function() {
    let roomIndex = RoomsView.$select.val();
    let roomName = RoomsView.roomNames[roomIndex];

    MessagesView.$chats.empty();

    Parse.readAll((data) => {
      for (let messages of data.results) {
        if (messages.roomname === roomName && messages.username && messages.text) {
          MessagesView.$chats.append($(MessageView.render(messages)));
        }
      }
    });
    
  }

};
