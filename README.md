# 概要
G'sのExpansion講座第一回の課題提出用ディレクトリです。

## 使い方
検索エンジンで http://localhost:3001  で入るとTODOリストが生成される

## 開発スタート手順まとめ
参考：https://gs-expansion-202207.deno.dev/nodejs/basic/prepare-api.html</br>
①ファイルを作成してnpm init</br>
②全部Enterで進む</br>
③package.jsonにtype: moduleの追加（verの下あたり）</br>
④npm i expressでExpressをインストール</br>
⑤.gitignoreファイルの生成と/node_modulesの記述</br>


## トライしてみたいこと
#### ①HtMLを返してみたい✅
#### ②HTMLからjsonを変更してみたい


## 不明点
### app.js
> これは、サーバーの"/"にGETでアクセスしてきた時に"Success！"を返す。という意味のようだ。
```
// 第一引数のreqはなんの為？
app.get("/", (req, res) => {
    res.send("Success!")
});
```
> Express.jsではデフォルトで静的ファイルをレスポンスとして返すことができないため、それを許可するための記述のようだ。
```
// webフォルダの中身を公開する
app.use(express.static('web'));
```

## 学び
- Web APIは、一般的にはhttp://example.com/api/v1/xxxのように、「/api/APIバージョン/機能名」の形式を取ることが多い


## 参考サイト
[Node.jsとExpressでWeb APIを作ってみよう](https://sbfl.net/blog/2018/08/25/nodejs-express-webapi/)
[JavaScriptのFetch APIを利用してリクエストを送信する](https://sbfl.net/blog/2017/01/29/fetch-api/)
