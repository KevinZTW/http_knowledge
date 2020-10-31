
// const fetch = require("node-fetch");
// let pro = fetch("https://cdn.hk01.com/di/media/images/cis/5e4270c8a5e2c82bd6096139.jpg/KNyBGtInTJ6vNZG50MWr4YRe57jWFOUilG8xy5RvMcs?v=w1920").then(
//     (response)=>{console.log(response.body); }
// ).catch((err)=>console.log(err))


const { static } = require("express");
var express =require("express");
var app =express();
var router = express.Router()
var bird = require("./bird_route")
var bodyparser =require("body-parser")
app.use(bodyparser.urlencoded({ extended: false }))



app.use(express.static("public"))

app.post("/post", (req, res)=>{
    console.log(req.body)   
    res.send("ok!")
})




app.listen(3000, ()=>{console.log("port open on 3000")})