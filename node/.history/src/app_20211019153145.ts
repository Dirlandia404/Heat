import express, { request, response } from "express";

const app = express();

app.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id`);
});
app.listen(4000, () => console.log("Tá rodando"));
