// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()
// models/item.js を読み込む
const item = require('./models/item')

// HomeControllerモジュール読み込み
const HomeController = require('./controllers/HomeController')

// GETリクエストの処理
// トップページ
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// 商品一覧
router.get('/item', (req, res) => {
    var data = {
        title: '商品一覧',
        items: item.get(),
    }
    // views/item/index.ejs にデータを渡して表示
    res.render('item/index', data)
})

// 商品詳細
// /item/xxx のルーティング(パスパラメーター)
router.get('/item/:id', (req, res) => {
    const id = req.params.id
    // TODO: case1 RDBMSを利用する
    // TODO: case2 APIサーバを利用する
    // itemモデルを使って、IDで商品データを取得
    var selectItem = item.find(id)
    var data = {
        title: '商品詳細',
        item: selectItem,
    }
    // views/item/detail.ejs にデータを渡して表示
    res.render('item/detail', data)
})

// POSTリクエスト
router.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password
    console.log(loginName, password)

    var message = "ログイン失敗"
    // .envで設定した値でログインチェック
    // TODO: データベースに接続してユーザ取得
    // TODO: パスワードはハッシュ値でチェック
    if (loginName == process.env.LOGIN_NAME && password == process.env.PASSWORD) {
        message = "ログイン成功"
        // TODO: ログインが成功したらユーザの状態を保存
        // TODO: ログイン後のページの転送
    } else {
        // TODO: ログイン画面に戻す
    }
    res.send(message)
})

// モジュール化
module.exports = router