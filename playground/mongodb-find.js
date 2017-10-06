const{MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users', (err, db) => {
  if(err){
    return console.log('Unable to connect to the server');
  }

  console.log('Connected to mongodb-server');

  db.collection('Users').find({name: 'Karan'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data from Users');
  })

});
