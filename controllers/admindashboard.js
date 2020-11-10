const connection = require('../config/database');

exports.dashborad = (req, res) => {
    if(req.session.isadmin) {
        res.render('admindashboard');
    } else {
        res.redirect('/');
    }
};

exports.addarticle = (req, res) => {
    //
    req.session.loggedin = true;
    req.session.isadmin = true;
    res.redirect('admindashboard');
};

exports.deletearticle = (req, res) => {
    connection.query(`DELETE FROM cars WHERE id="${ req.body.id }";`);
    req.session.loggedin = true;
    req.session.isadmin = true;
    res.redirect('admindashboard');
};

exports.deleteuser = (req, res) => {
    connection.query(`DELETE FROM users WHERE id="${ req.body.id }" AND login="${ req.body.login }";`);
    req.session.loggedin = true;
    req.session.isadmin = true;
    res.redirect('admindashboard');
};