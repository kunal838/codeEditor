const io = require('socket.io')(3001,{
    cors:{
        origin:'http://localhost:3000',
        methods: ["GET", "POST"]
    }
})

io.on("connection",socket =>{

    socket.on("getDocument",id=>{
        const data = ""
        socket.join(id)
        socket.on('sendChanges',code =>{
            socket.broadcast.to(id).emit("recieveChanges",code)
        })
    })


   
  console.log("connected");  
})