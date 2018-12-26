var express = require("express");
var app = express();

var port = process.env.PORT || 8090;

app.use(express.static("public"));

app.listen(port, function(err) {
  if (err) {
    throw err;
  }
  console.log("Navigate to http://%s:%d", "localhost", port);
});
