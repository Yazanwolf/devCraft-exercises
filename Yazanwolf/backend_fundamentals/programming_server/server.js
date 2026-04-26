const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/", (req, res) => {
  res.render('index');
});

app.post("/willkommen", (req, res) => {
  const requestBody = req.body;
  console.log("Request-Body is: ", requestBody)
  res.render('welcome', {name: requestBody.name});
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

