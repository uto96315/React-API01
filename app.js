// app.js

import express from "express";
import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";
import { todoRouter } from "./routes/todo.route.js";
import { slackRouter } from "./routes/slack.route.js";

const app = express();
app.use(express.urlencoded({ extended: true }));  // わかっていない
app.use(express.json());  // わかっていない
const port = 3001;

// 例
app.get("/", (req, res) => {
    res.json({
        url: "/",
        message: "Hello, node.js",
    });
});


// おみくじ用
// ここ書き換え忘れでエラーが出たので注意 get => use
app.use("/omikuji", (req, res) => omikujiRouter(req, res));

// じゃんけん用
app.use("/janken", (req, res) => jankenRouter(req, res));

// todo用
app.use("/todo", (req, res) => todoRouter(req, res));

// slack用
app.use("/slack", (req, res) => slackRouter(req, res));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


