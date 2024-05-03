const express = require("express");
const cors = require("cors");
const phone = require("./phones.json");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("we are checking node mon");
});

app.get("/phone", (req, res) => {
  res.send(phone);
});

app.get("/phone/:id", (req, res) => {
  const id = req.params.id;
  const idInt = parseInt(id);
  console.log(`we need data for ${id}`);
  const sPhone = phone.find((phone) => phone.id === idInt) || {};
  res.send(sPhone);
});

app.listen(port, () => {
  console.log(`my app server running on ${port}`);
});
