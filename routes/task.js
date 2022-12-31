const express = require("express");
const route = express.Router();
const taskModel = require("../schemas/task");

route.get('/',(req,res)=>{ //devuelve todas las tareas
    taskModel.find({ }, (error, data) =>{
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data});
    });
});

route.get("/:id",(req,res)=>{//devuelve la tarea por id
    taskModel.find({ id: req.params.id }, (error, data) =>{
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data});
    });
});

route.post("/create",(req,res)=>{
   console.log("El body es: ", req.body);

   const task = new taskModel(req.body);

   task.save().then((document)=>{
    res.json({status:200, data: document});
   }).catch((error)=>{
    res.json({status: 500, data:error});
   });
});

route.put("/:id", (req,res)=>{
    taskModel.findOneAndUpdate({ id:req.params.id }, req.body,{}, (error, data) => {
        if (error) {
            res.json({ status:500, data: error});
        }

        res.json({ status: 200, data});
    })
})

route.delete("/:id",(req, res)=>{
    taskModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error});
        }

        res.json({ status: 200, data});
    });
});

module.exports = route;