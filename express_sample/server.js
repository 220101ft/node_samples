// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')

// dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)