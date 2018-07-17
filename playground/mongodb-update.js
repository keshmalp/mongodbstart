const {ObjectID,MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err)
  {
    return console.log('unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  //const db=client.db('TodoApp');
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b26331fe11d3a3c2081bdfd')
  },{
    $set:
    {
      name: 'Hum dil de chuke sanam'
    },
    $inc:
    {
      age:1
    }
  },
    {
      returnOriginal: false
    }).
    then((result)=>{
    console.log(result);
  });

  //client.close();
});
