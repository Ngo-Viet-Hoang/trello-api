// const express = require("express");
import express from "express";
const app = express();

const hostname = "localhost";
const port = 8016;

app.get("/", function (req, res) {
  res.send("Hello word ga ");
});

app.listen(port, hostname, () => {
  console.log(`Hello honkai star rail at https://${hostname}:${port}/`);
});
