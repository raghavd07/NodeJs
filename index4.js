import express from "express";
const app=express()
app.listen(8085);
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/:id/:name",(req,res)=>{
    const id=req.params.id;
    const name=req.params.name
    res.send(id+" "+name)
});

app.get("/id/:id/name/:name",(req,res)=>{
    const id=req.params.id;
    const name=req.params.name
    res.send(id+" "+name)
});