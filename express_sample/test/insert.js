const User = require('../models/User')
// bcryptモジュール
const bcrypt = require('bcrypt')

var user = new User();
var data = {
    name: "Node",
    email: "node@test.com",
    password: hash,
}

var result = user.add(data);
console.log(result);