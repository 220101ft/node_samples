// expressモジュール読み込み
const express = require('express')
// Routerオブジェクトを生成
const router = express.Router()

// HomeControllerモジュール読み込み
const HomeController = require('./controllers/HomeController')
const ItemController = require('./controllers/ItemController')

// GETリクエストの処理
// トップページ
router.get('/', HomeController.index)
router.get('/profile', HomeController.profile)

// 商品一覧
router.get('/item', ItemController.index)

// 商品詳細
// /item/xxx のルーティング(パスパラメーター)
router.get('/item/:id', ItemController.detail)

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