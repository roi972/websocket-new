const httpProxy = require('http-proxy');

const http = require('http');

let clients = 0;
const target = process.env.WS_TARGET || 'ws://localhost:8080'
console.log('proxy target is:', target);
const proxy = new httpProxy({ws:true, target});

proxy.on('error', (err)=> {
  console.error('Error:', err);
})

proxy.on('open', (socket)=>{
  console.log('open connection. clients:', ++clients);
})

proxy.on('close', (res,socket,head) => {
  console.log('close connection. clients:', --clients);
})
const server = http.createServer();
server.on('upgrade', (req,socket,head) =>{
  console.log('got upgrade, proxying request...');
  proxy.ws(req, socket, head);
});




server.listen(3000); 
console.log('listening on 3000...')



