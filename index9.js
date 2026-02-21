import express from "express"
import bcrypt from "bcrypt"
const app = express();
app.listen(8085);
app.use(express.json())

let users = [];

app.get("/", (req, res) => {
  res.send("hello world")
});

app.post("/signup", async (req,res)=>{
    const password = await bcrypt.hash(req.body.password,12)
    const user= {
        id: req.body.id,
        name: req.body.name,
        email:req.body.email,
        password:password,
    }
    users.push(user)
    res.json(users)
})

app.post("/login", async (req,res)=>{
    const {email, password}= req.body;

    const found = users.find((user)=>
    user.email===email)

    if (!found){
        res.status(400).send("Invalid user - not found")
        return
    }
    const isMatch = await bcrypt.compare(password,found.password)
    if(isMatch){
        res.send("Hello "+found.name)
    }
    else{
        res.status(400).send("Invalid Password")
    }
})