const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

let users = [];  // This will store our users

// Handling POST request for '/register'
app.post('/register', (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, // Note: In a real application, never store passwords as plain text
    };

    // check if user already exists
    const userExists = users.find(user => user.username === newUser.username || user.email === newUser.email);
    if(userExists){
        return res.status(400).send('User with given username/email already exists');
    }

    users.push(newUser); // Add the new user to our users array
    res.status(200).send('User registered successfully'); // Send success message
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if(!user) {
        return res.status(400).send('Not a user');
    }

    if(user.password !== password) {
        return res.status(400).send('Incorrect password');
    }

    res.status(200).send('User logged in succesfully.');
})

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.get('/login', (req, res) => {
    res.send('login');
});

// Server listens on port 5000
app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
