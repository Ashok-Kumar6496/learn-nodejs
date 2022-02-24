const mongoDB = require('mongodb');

const MongoClient = mongoDB.MongoClient;
const ObjectId = mongoDB.ObjectId;

const connectionURL = 'mongodb+srv://task-user:task-password@cluster0.tksd8.mongodb.net';

const dataBaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Mongo DB server!!');
    }

    console.log('Connected to Mongo DB..');
    const db = client.db(dataBaseName);
    const collection = db.collection('users');

    //Insert a single document

    // collection.insertOne({
    //     name: "Liki",
    //     age: 24,
    //     gender: 'Female'
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert the document.')
    //     }

    //     console.log('Document acknowledged : ', result.acknowledged)
    // })

    //Insert Many documents

    // db.collection('tasks').insertMany(
    //     [
    //         {
    //             description: 'Performing base ananlysis..',
    //             isCompleted: true
    //         },
    //         {
    //             description: 'Performing Actual tests',
    //             isCompleted: false
    //         },
    //         {
    //             description: 'Final steps initiated..',
    //             isCompleted: false
    //         }
    //     ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert documents!!')
    //         }
    //         console.log('Documents inserted : ', result.acknowledged, 'Ids of docs inserted :', result.insertedIds)
    //     })

    //Find a single document

    // db.collection('tasks').findOne({isCompleted: false}, (error, task)=> {
    //     if(error) {
    //         return console.log('Unable to fetch a document!!');
    //     } 

    //     console.log(task);
    // })

    // db.collection('tasks').findOne({_id: ObjectId("61a486b234ebfb9dda306964")}, (error, task)=> {
    //     if(error) {
    //         return console.log('Unable to fetch a document!!');
    //     } 

    //     console.log(task);
    // })

    //fetch docs count
    // db.collection('tasks').find({isCompleted:false}).count((error, count)=> {
    //     if(error) {
    //         return console.log('Unable to fetch documents!!');
    //     } 
    //     console.log(count)
    // })

    //fetch docs based on doc
    // db.collection('tasks').find({isCompleted:false}).toArray((error, tasks)=> {
    //     if(error) {
    //         return console.log('Unable to fetch documents!!');
    //     } 
    //     console.log(tasks)
    // })

    // db.collection('tasks').updateOne({
    //     _id: ObjectId('61a486b234ebfb9dda306963')
    // }, {
    //     $unset: {
    //         descriptions: 'Initial analysis...'
    //     }
    // }).then((result) => {
    //     console.log('Is updated :', result.acknowledged);
    // }).catch((error) => {
    //     console.log('Error :', error);
    // })


    //UpdateMany using callback
    // db.collection('tasks').updateMany({
    //     isCompleted: true
    // }, {
    //     $set: {
    //         percentageOfCompletion: 100
    //     }
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Error :', error);
    //     } 
    //     console.log(result);
    // })

    //UpdateMany using promises
    // db.collection('tasks').updateMany({
    //     isCompleted: false
    // }, {
    //     $inc: {
    //         percentageOfCompletion: 2
    //     }
    // }).then((result) => {
    //     console.log('Result of updateMany', result);
    // }).catch((error) => {
    //     console.log('Error :', error);
    // })

    db.collection('tasks').deleteOne({
        isCompleted: true
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

    db.collection('tasks').deleteMany({
        isCompleted: false
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

})

