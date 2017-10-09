const{MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if(err){
    return console.log('Unable to connect to the server');
  }

  console.log('Connected to mongodb-server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("59d7acb8dacbfc8d47e5862b")
  }, {
    $set: {
      name: 'Atwal'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  })

});
