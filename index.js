const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

const users = [
  {
    id: 1,
    name: "shuvo",
    age: 30,
  },
  {
    id: 2,
    name: "Hasib",
    age: 20,
  },
  {
    id: 3,
    name: "joy",
    age: 40,
  },
  {
    id: 4,
    name: "sohel",
    age: 18,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome from backend!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(port, (req, res) => {
  console.log(`Server is runnig on port: ${port}`);
});
