const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Homepage");
});
app.get("/about", function (req, res) {
    res.send("About section");
});
app.get("/contact-me", function (req, res) {
    res.send("Contact information");
});
app.get("/*", function (req, res) {
    res.send("404 page not found");
});
  
app.listen(port, function () {
console.log(`Example app listening on port ${port}!`);
});
