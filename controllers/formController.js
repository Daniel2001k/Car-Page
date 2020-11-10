const connection = require('../config/database');

exports.login = (req, res) => {
    let username = req.body.login;
    let password = req.body.password;
    if (username && password){
        connection.query(`SELECT * FROM users WHERE users.login = "${req.body.login}" AND users.passwd = "${req.body.password}"`, (err, result) => {
            if (result.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                req.session.incorrectPass = false;
                req.session.enterPass = false;
                if ( username === 'admin' && password === 'admin') {
                    req.session.isadmin = true;
                    res.redirect('admindashboard');
                } else {
                    res.redirect('/');
                }
            } else {
                req.session.incorrectPass = true;
                req.session.enterPass = false;
                res.redirect('/');
            }
            res.end();
        });
    } else {
        req.session.enterPass = true;
        req.session.incorrectPass = false;
        res.redirect('/');
    }
};
exports.signin = (req, res) => {
    let login = req.body.login;
    let pssw = req.body.password;
    let pssw1 = req.body.password1;
    let email = req.body.email;
    let date = req.body.birth;
    if( login && pssw && pssw1 && email && date ) {
        if ( pssw === pssw1 ) {
            connection.query(`SELECT login FROM users WHERE login = "${ login }"`, (err, rows) => {
                if (err) throw err;
                if (rows == 0) {
                    req.session.otherPasswd = false;
                    req.session.busyLogin = false;
                    connection.query(`INSERT INTO users (id, login, passwd, email, birth) VALUES (NULL, "${ req.body.login }", "${ req.body.password }", "${ req.body.email }", "${ req.body.birth }");`, (err1, result) => {
                        if (err1) throw err1;
                        res.redirect('/');
                    });
                } else {
                    req.session.otherPasswd = false;
                    req.session.busyLogin = true;
                    req.session.enterRegister = false;
                    res.redirect('/');
                }
            });
        } else {
            req.session.otherPasswd = true;
            req.session.enterRegister = false;
            req.session.busyLogin = false;
            res.redirect('/');
        }
    } else {
        req.session.otherPasswd = false;
        req.session.enterRegister = true;
        req.session.busyLogin = false;
        res.redirect('/');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};
