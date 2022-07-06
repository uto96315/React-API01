// app.js

import express from "express";
import { todoRouter } from "./routes/"

const app = express();
const port = 3001;

// ルート(http://localhost/)にアクセスしてきた時の処理
// 第一引数のreqはなんの為？
app.get("/", (req, res) => {
    res.send("Success!")
});

// todo用
app.use("/todo", (req, res) => {
    res.json({
        url:"/todo",
        messsage: "Success for accessing todo app.",
    })
})

// 指定されたポート番号でサーバーを立てる処理
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});