const express = require("express");
const route = express.Router();
const rolesModel = require("../schemas/roles");

route.get('/',(req,res)=>{
    rolesModel.find({ }, (error, data) =>{
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data});
    });
});

route.get("/:id",(req,res)=>{
    rolesModel.find({ id: req.params.id }, (error, data) =>{
        if(error){
            res.json({ status: 500, data: error });
        }
        res.json({ status: 200, data});
    });
});

route.post("/create",(req,res)=>{
   console.log("El body es: ", req.body);

   const roles = new rolesModel(req.body);

   roles.save().then((document)=>{
    res.json({status:200, data: document});
   }).catch((error)=>{
    res.json({status: 500, data:error});
   });
});

route.put("/:id", (req,res)=>{
    rolesModel.findOneAndUpdate({ id:req.params.id }, req.body,{}, (error, data) => {
        if (error) {
            res.json({ status:500, data: error});
        }

        res.json({ status: 200, data});
    })
})

route.delete("/:id",(req, res)=>{
    rolesModel.findOneAndDelete({ id: req.params.id }, {}, (error, data) => {
        if(error){
            res.json({ status: 500, data: error});
        }

        res.json({ status: 200, data});
    });
});

module.exports = route;