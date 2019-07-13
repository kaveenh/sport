const express = require("express");
const mongoose = require("mongoose");
const io = require('socket.io')();
const UserFunctions=require('./classes/User')



const app = express();


http=require('http');
const server=http.createServer(app);

const IP="127.0.0.1";
const PORT=4000;
const IO_PORT=4500;
const DATABASE_CONNECTION="mongodb://localhost:27017/sportsDB";

let socketArray=[]
let clientArray=[]

exports.addToClientArray=(client)=>{
    clientArray.push(client);
    
}

app.use(express.static(__dirname+'/client/build'));
    io.on('connection', (client) => { //a new client has been connected
        socketArray.push(client)
        console.log("connected");
        client.emit("Connected")
        client.on("loginData",(data)=>{
            console.log("data : "+ JSON.stringify(data));
            UserFunctions.signUpFunction(data, client);

    })
    client.on("Login",(data)=>{
        console.log("data : "+ JSON.stringify(data));
        let user= UserFunctions.loginFunction(data, client);
        // if(user){
        //     client.userData=user;
        // }
    })
        client.on("disconnect",()=>{ //to remove a client form socketArray.Now only the online clients are here
            socketArray.splice(socketArray.indexOf(client),1)
            clientArray.splice(clientArray.indexOf(client),1)
            console.log("disconnected");

    })
})






mongoose.Promise=global.Promise;
mongoose.connect(DATABASE_CONNECTION, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);







app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
io.listen(IO_PORT);
server.listen(PORT,IP);










    