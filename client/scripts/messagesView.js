var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.renderMessage();
 

    // Parse.readAll((data) => {
    //   console.log(data);
    //   console.log('will this work?');
    // });
    Parse.readAll((data) => {
      // examine the response from the server request:

      for (let i = 0; i < 50; i ++) {

        if (data.results[i].username && data.results[i].text) {
          MessagesView.$chats.append($(MessageView.render(data.results[i])));
        }
      }

    });
  },

  renderMessage: function() {

  }

};