// app.js

import express from "express";
import { todoRouter } from "./routes/todo.route.js";

const app = express();
const port = 3001;


// webフォルダの中身を公開する
app.use(express.static('web'));

<<<<<<< HEAD

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];
=======
// /api/v1/listでアクセスしてきたらtodoRouterに送る
// app.use('/api/v1/list', (req, res) => todoRouter(req, res));
>>>>>>> 59c3f89c1c8809a47e6e45270cd1797403b158f4

// 指定されたポート番号でサーバーを立てる処理
// これがないとエラーが出た
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

<<<<<<< HEAD
=======



// todo用
// app.use("/todo", (req, res) => {
//     res.json({
//         url:"/todo",
//         messsage: "Success for accessing todo app.",
//     })
// })
>>>>>>> 59c3f89c1c8809a47e6e45270cd1797403b158f4

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