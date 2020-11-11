const express = require('express');
const path = require('path')
// const users = require('./UserData')

const app = express();



//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// //Getting all users
// app.get('/api/users', (req, res) => res.json(users))

// //Getting single user
// app.get('/api/users/:id', (req, res) => {
//     res.json(users.filter(user => user.id === parseInt(req.params.id)));
// })
//users API route
app.use('/api/users', require('./routes/api/users'));

//Static Folder

// app.get('/', (req, res) => {
//     // res.send("API is working");
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

app.use(express.static(path.join(__dirname, 'public')))



const port = 5000;

app.listen(port, () => { console.log("Server started on port", port); });