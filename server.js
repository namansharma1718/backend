const http=require('http');
const app=require('./app');
const hostname='0.0.0.0'

const server=http.createServer(app);
server.listen(process.env.Port || 5000, hostname);


    
