
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Define an array to store user data (replace with a database in a production environment).
const users = [
    { username: 'karthik', password: '12345' },
    { username: 'admin', password: 'admin' },
];

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    
    .login-container {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    
    input[type="text"], input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    
    button {
        background-color: #007BFF;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form action="/login" method="POST">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</body>
</html>

    `);
  });

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to a different page on successful login
        res.redirect('/success');
    } else {
        // Display a pop-up message for failed login
        res.send('<script>alert("Login failed. Invalid username or password."); window.location="/";</script>');
    }
});

app.get('/success', (req, res) => {
    res.send('Login successful! You are now on the success page.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
