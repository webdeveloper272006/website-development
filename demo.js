// const createserver =require('node:http')
// let hostname= '127.0.0.1'
// let port = '3000'
// const server=Http.createserver((req,res=>{
//     res.statuscode = 200
//     res.setHeader =('content-Type','text/plain')
//     res.end(`Hello World`);
// }))
// server.listen(port,hostname,()=>{
//     console.log(`server running is ${hostname}:${port}/`);
    
// })

const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(`processing the first HTTp request and shutting down the server immediately`);
    // console.log(req.url,req.method,req.headers);
    process.exit();
})
const PORT=3000
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
})