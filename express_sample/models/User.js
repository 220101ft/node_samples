//mysql2/promiseモジュール読み込み
const mysql = require('mysql2/promise')
const db = require('../lib/db')

class User {
    //ユーザ追加（非同期処理）
    add = async (post) => {
        // SQL
        var sql = 'INSERT INTO users SET ?;'
        try {
            // DB接続
            const con = await mysql.createConnection(db.info);
            var result;
            // SQL実行
            result = con.query(sql, post);
        } catch (error) {

        } finally {
            con.end();
        }
    }
    auth = (email, password) => {

    }
}

//モジュール化
module.exports = User