// モジュール化
exports.index = (req, res) => {
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    // レスポンスの処理
    // res.send('Hello!!')
    // テンプレート表示(レンダリング)
    // views/index.ejs を表示
    res.render('index')
}