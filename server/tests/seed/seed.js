const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const todos = [{
  _id: new ObjectID(),
  text: 'First todo'
}, {
  _id: new ObjectID(),
  text: 'Second todo',
  completed: true
}]

var UserOneId = new ObjectID();
var UserTwoId = new ObjectID();

const users = [{
  '_id': UserOneId,
  'email': 'karan@abc.com',
  'password': 'password1',
  'tokens': [{
    'access': 'auth',
    'token': jwt.sign({'_id': UserOneId, 'access': 'auth'}, 'abc123').toString()
  }]
},
{
  '_id': UserTwoId,
  'email': 'atwal@abc.com',
  'password': 'password2',
}]

var populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

var populateUsers = (done) => {
  User.remove({}).then(() => {
  var userOne = new User(users[0]).save();
  var userTwo = new User(users[1]).save();

  return Promise.all([userOne, userTwo])
}).then(() => done());
};


module.exports = {todos, users, populateUsers, populateTodos};
