import express from "express";
const app=express();
app.listen(8085);
app.get("/",(req,res)=>{
    res.send(req.query.id+" "+req.query.name);
});

