const {Object_ID,MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err)
  {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

const db=client.db('TodoApp');

db.collection('Users').find({
  name:"Lionel Messi"
}).toArray().then((docs)=>
{
  console.log('Todos');
  console.log(JSON.stringify(docs,undefined,2));
},(error)=>
{
  if(error)
  {
    console.log('There was some error');
  }
});

  client.close();
});
