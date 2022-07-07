// app.js

import express from "express";
import { todoRouter } from "./routes/todo.route.js";

const app = express();
const port = 3001;

// webフォルダの中身を公開する
app.use(express.static('web'));

// /api/v1/listでアクセスしてきたらtodoRouterに送る
// app.use('/api/v1/list', (req, res) => todoRouter(req, res));

// 指定されたポート番号でサーバーを立てる処理
// これがないとエラーが出た
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});




// todo用
// app.use("/todo", (req, res) => {
//     res.json({
//         url:"/todo",
//         messsage: "Success for accessing todo app.",
//     })
// })

// http://localhost:3000/api/v1/list にアクセスしてきたときにTodoListを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});