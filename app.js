const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectFlash = require('connect-flash');
const routes = require('./routes/index');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'importCarsDataBase'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'user_sid',
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 6000000
    }
}));
app.use(connectFlash());
app.use('/', routes);

module.exports.app = app;
module.exports.connection = connection;
