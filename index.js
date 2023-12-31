const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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
  console.log("Post is hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.send(newUser);
});

app.listen(port, (req, res) => {
  console.log(`Server is runnig on port: ${port}`);
});
