const express = require("express");
const app = express();
const port = 8000

app.get('/login',(req,res)=>{
    return res.send('You are loogged in ');
});

app.get('/signup',(req,res)=>{
    return res.send('You are on signup page ');
});

const admin = (req, res)=>{
    return res.send("Hi this is admin dashboard");
}
app.get("/admin",admin);

app.listen(port, ()=>{
     console.log("Hey server is running up to date...");
})