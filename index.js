import express from "express";

const app = express();

app.use(express.static(process.cwd() + "/web"));

app.listen(process.env.PORT || 8080);