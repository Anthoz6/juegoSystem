const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const { 
    PORT, 
    DB_HOST, 
    DB_USER, 
    DB_PASSWORD, 
    DB_PORT, 
    DB_NAME } = require('./config');

const app = express();

// Importing routes
const customerRoutes = require('./routes/customer');

// Settings
app.set('port', PORT);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_NAME
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${ app.get('port') }`);
});

