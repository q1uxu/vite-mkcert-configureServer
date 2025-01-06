import express from "express";

const app = express();

app.get("/api/ping", (req, res) => {
  res.status(200).end("ping");
});

export default app;
