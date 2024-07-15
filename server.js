//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});



app.post("/",function(req,res){
    //res.sendFile(__dirname + "/index.html");
    //res.send("Thanks for posting that");
    console.log(req.body);
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var result = n1 + n2;
    res.send("The result of the calculation is " + result);
});

app.post("/bmiCalculator",function(req,res){
    //res.sendFile(__dirname + "/index.html");
    //res.send("Thanks for posting that");
    console.log(req.body);
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var bmi = w / (h*h);
    res.send("The BMI is: " + bmi);
});





app.listen(3000,function(){
   console.log("Server is runing on port 3000"); 
});


//console.log("Hell");
