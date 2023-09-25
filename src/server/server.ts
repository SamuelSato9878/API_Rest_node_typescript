import express from 'express';


const server = express();

server.get("/", function(req, res){
    return res.send("Ola Programador!");
});



export { server };