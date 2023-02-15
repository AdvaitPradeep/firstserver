const express = require('express');
const app = express();
const http = require('http');
app.get("/", function(request, response){
    response.send("<h1>I just created my first server.</h1>");
});

app.get("/about", function(request, response){
    response.send("<h1>This is the about page.</h1>");
});

app.listen(3000, function(){
    console.log("server running on port 3000");
});