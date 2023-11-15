const User = require('../models/User')

var user = new User();
var data = {
    name: "Node",
    email: "node@test.com",
    password: "password",
}
user.add(data);