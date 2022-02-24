require('../src/app');
const Task = require('../src/models/task');

// Task.findByIdAndDelete({ _id: '61b31159c5f7585de6fde6f9' }).then((task) => {
//     console.log(task);
//     return Task.countDocuments();
// }).then((count) => {
//     console.log('Number of documents', count);
// }).catch((error) => {
//     console.log(error);
// })

//Instead of using above promise chaining, we can use async and await to achieve this. Since using multiple then cause few issues like
//readability, accessing variables.
const findByIdAndDeleteDocument = async (id) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments()
}

findByIdAndDeleteDocument('61b225eaf5c801b21f997505').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})