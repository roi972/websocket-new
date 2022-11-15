import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080
});

wss.on('connection', (ws) => {
  console.log('Got new connection');
  ws.on('message', (data)=> {
    console.log('received: %s', data);
  });

  ws.on('close', ()=>{
    console.log('client connection closed');
  })

  ws.on('error', (err)=>{
    console.error('client connection error:', err);
  })

  ws.send('something');
  

});