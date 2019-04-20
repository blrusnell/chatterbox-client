var MessageView = {

  render: _.template(`
  
      <div class="chat">
        <button class="name" id="<%- username %>"><%- username %></button>
        <div><%- text %></div>
      </div>
    
    `)

};

