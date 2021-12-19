const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 3000;

app.use(express.json()); //A middleware, so that we can send json as a request... also to use req.body.

//Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Shivam!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
