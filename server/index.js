import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080
});

wss.on('connection', (ws,request) => {
  console.log('Got new connection, clients:', wss.clients.size);  
  ws.on('message', (data)=> {
    console.log(`received message: ${data}`);
    console.log("");
  });

  ws.on('close', ()=>{
    console.log('client connection closed, clients:', wss.clients.size);
  })

  ws.on('error', (err)=>{
    console.error('client connection error:', err);
  })

  ws.send('something');
  

});

console.log('listening on ws://localhost:8080')