import express from "express";

const port = 3200;
const app = express();

app.get("/hello", (req, res) => {
  res.send({data: 'hello world'});
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
})