var Friends = {
  
  
  listOfFriends: [],

  initialize: function() {
    let $username = window.$('.name');

    console.log($username);
    $username.on('click', Friends.addFriend);
  },

  addFriend: function(event) {
    let $username = window.$('.name');
    let name = $username;
    console.log(name);
    event.preventDefault();

  },

  

};