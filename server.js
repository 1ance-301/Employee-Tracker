const db = require('./config/connection');
const app = require('./app');

// Greeting fo the app
console.log('EMPLOYEE MANAGER');

app.init();

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});