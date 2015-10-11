var express = require('express');
var app = express();

//load routes
require("./app/routes/entities/meta_entity")(app);

app.get('/test', function(req, res) {
    res.send("hello world");
});

console.log("listening on port 3000");
app.listen(3000);