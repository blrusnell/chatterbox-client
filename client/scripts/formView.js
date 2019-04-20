var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let msg = {
      username: App.username,
      text: $('#message').val(),
      room: 'default'
    };
    Parse.create(msg);
    MessagesView.$chats.empty();
    Parse.readAll((data) => {
      // examine the response from the server request:
      for (let i = 0; i < 25; i++) {
        MessagesView.$chats.append($(MessageView.render(data.results[i])));
      }
    });

    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};