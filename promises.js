const promiseFunction = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1, 2, 3])
        //reject('errors')
    }, 2000);
})

promiseFunction.then((result) => {
    console.log('Success!!', result)
}).catch((error)=> {
    console.log('Error', error)
})