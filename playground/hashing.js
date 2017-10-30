const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log(decoded);
// var message = "hello";
// var msg = "Hello karan";
// var hash1 = SHA256(message).toString();
// var hash2 = SHA256(msg).toString();
//
// console.log(hash1);
// console.log(hash2);
