// import express, { } from "express";

// const port = 3200;
// const app = express();

// app.get("/hello", (req, res) => {
//   res.send({data: 'hello world'});
// });
// app.get('/api/procurement', (req, res) => {

// })
// app.listen(port, () => {
//   console.log(`Server started at http://localhost:${port}`);
// })

import * as dotenv from 'dotenv';
import express from 'express';
import config from 'config';

dotenv.config();

const app = express();
const port = config.get<number>('port');

app.get('/healthChecker', (req, res) => {
  res.send({ data: 'hello world' });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
