import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express'
const wsProxy = createProxyMiddleware('ws://localhost:8080', {changeOrigin: true});

const app = express();
app.use(wsProxy);

const server = app.listen(3000, "localhost");
server.on('upgrade', wsProxy.upgrade);

console.log('Waiting on 3000...')