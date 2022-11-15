import websocket from 'websocket';


const wsClient = new websocket.client();

wsClient.on('connectFailed', (error)=>{
  console.error('Connection failed:', error);
});

wsClient.on('connect', (connection) => {
  console.log('Websocket client connected');
  connection.on('error', (err) => {
    console.error('Connection error:', err);
  });

  connection.on('close', ()=>{
    console.log('connection closed');
  });

  connection.on('message', (message)=>{
    if (message.type === 'utf8') {
      console.log("Received: '" + message.utf8Data + "'");
  };
  });

})

wsClient.connect('ws://localhost');
