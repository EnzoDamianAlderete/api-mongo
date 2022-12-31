const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const rolesRoute = require("./routes/roles");
const taskRoute = require("./routes/task");
const log = require('./middlewares/log');

app.use(log);
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("Prueba home mongodb")
})

app.use("/user",userRoute);
app.use("/roles",rolesRoute);
app.use("/task",taskRoute);

mongoose.connect("mongodb://127.0.0.1:27017/api-mongoDB",(error)=>{
    if (error){
        console.log("Hubo un error en la conexion a MongoDB", error);
    }else{
        console.log("Conexion exitosa");
    }
})


app.listen(3500);