// Modelモジュール読み込み
const Model = require("./Model");

// Modelクラスを継承
class User extends Model {
    dataFile = "./data/users.json"
}

// モジュール化
module.exports = User