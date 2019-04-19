var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      console.log('this is in MessagesView');
      for (let i = 0; i < 25; i ++) {
        console.log(data.results[i]);
        if (data.results[i].username && data.results[i].text) {
          MessagesView.$chats.prepend($(MessageView.render(data.results[i])));
        }
      }

    });

    // Parse.readAll((data) => {
    //   console.log(data);
    //   console.log('will this work?');
    // });
  },

  render: function(event) {

    event.preventDefault();
    console.log('trying to render!');
  }

};