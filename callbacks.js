const callBackFunction = (callback) => {
    setTimeout(() => {
        callback('hi hello'); 
    }, 2000);

}

callBackFunction((message)=> {
    console.log('call back function message :', message)
});