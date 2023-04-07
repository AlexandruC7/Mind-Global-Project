import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 4000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});