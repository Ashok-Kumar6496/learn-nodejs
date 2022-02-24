const express = require('express');
require('./app')
const userRouter = require('./routers/user-routes')
const port = process.env.PORT || 3000
const taskRouter = require('./routers/task-routes')

const app = express();
app.use(express.json());


//This below 2 functions are express MIDDLEWARE which ll be executed before the routes do 
//the actual job after getting a request from outside. We intentionally put this code
//before we attach routers to express so that it executes before the routes.
// app.use((req, res, next)=> {
//     res.status(503).send('Site is under maintainance')
// })

// app.use((req, res, next)=> {
//     if(req.method === "GET") {
//         return res.send('Get requests are not supported')
//     } else {
//         next()
//     }
// })


app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up and running!!')
})


// const bcrypt = require('bcrypt');

// const hashPassword = async() => {
//     const hashedPassword = await bcrypt.hash('Ashok@123', 8);
//     console.log(hashedPassword);
//     console.log(await bcrypt.compare('Ashok@123', '$2b$08$dP8SeEmUNPnGhX/xh7UKIOZTJTGlYcAPqUJcPJ2q6xP.FNDFfGwwa'))
// }

// hashPassword()