const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if(err){
    return console.log('Unable to connect to the Mongo server');
  }

  console.log('Connected to Mongodb server');

  db.collection('Users').insertOne({
    name: 'Karan',
    age: 22,
    location: 'Noida, India'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert', err)
    }

    return console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
