const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");   

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

let item = ["Do Meditation", "Complete Backlogs"];

app.get("/", function (req, res) { 
    
    let day= date();
    res.render("list", { kindOfDate: day, listitem: item });
})

app.post("/", function(req,res){
    let newListItem = req.body.newItem;
    item.push(newListItem);
    res.redirect("/");  
    // console.log(req.body.newItem);
})

app.listen(3000, function () {
    console.log("Server Started on Port 3000");
})