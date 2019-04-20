var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
  

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      console.log(data);
      console.log('this is coming from the server');
      
      for (let i = 0; i < 50; i ++) {
        if (data.results[i].username && data.results[i].text) {
          MessagesView.$chats.append($(MessageView.render(data.results[i])));
        }
      }

      Friends.initialize();
  
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
