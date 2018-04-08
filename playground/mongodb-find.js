// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('todos').find({
    _id: new ObjectID('5aca077e762f560bd3e8a958')
  }).toArray().then((docs) => {
    console.log('*** Todos: filter by ID');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/


  db.collection('todos').find().count().then((count) => {
    console.log(`*** Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });
  

  db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
    console.log('*** Users: filter by name');
    console.log(JSON.stringify(docs, undefined, 2));
  });

  // db.close();
});
