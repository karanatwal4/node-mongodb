const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var password = '123abc';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//       console.log(hash);
//   });
// });

var hashed = '$2a$10$MO4QJiO7K7FC37Yge.yEAOOiWTVxBNtTOvKWi/MCkmbHOQXqXUPIG';

bcrypt.compare(password, hashed, (err, res) => {
  console.log(res);
});
