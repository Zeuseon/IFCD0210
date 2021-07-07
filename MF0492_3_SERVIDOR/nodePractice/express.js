const express = require("express");
const app = express ();
const port = 3000;

app.get("/contacto", (req, res) =>  {
    res.send("ruta de contacto");
});

app.post("/", function (req, res) {
    res.send("Got a POST request");
});

app.put("/user", function (req, res) {
    res.send("Got a PUT request at /user");
});

app.delete("/user", function (req, res) {
    res.send("Got a DELETE request at /user");
});


app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}");
});


