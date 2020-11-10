const connection = require('../config/database');

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

exports.home = (req, res) => {
    let isLogin = (req.session.loggedin) ? true : false;
    let incorrectP = (req.session.incorrectPass) ? true : false;
    let enterP = (req.session.enterPass) ? true : false;
    let username = req.session.username;
    let enterRegister = (req.session.enterRegister) ? true : false;
    let otherPasswd = (req.session.otherPasswd) ? true : false;
    let busyLogin = (req.session.busyLogin) ? true : false;

    let numRows;
    const sql = `SELECT COUNT(id) AS count FROM cars`;


    connection.query(sql , (err, result) => {
        if (err) throw err;

        // number of id's
        numRows = result[0].count;
        // random numbers in scope (1 - numRows)
        let n = numRows;
        let k = n;

        var numbers1 = new Array(n);
        var numbers = new Array(n);

        for (var i=0; i<n; i++) {
            numbers1[i] = i;
        }

        for (var i=0; i<k; i++) {
            var r = Math.floor(Math.random()*n);
            numbers[i] = numbers1[r];
            numbers1[r] = numbers1[n - 1];
            n--;
        }

        // -- end

        connection.query(`SELECT * FROM cars`, (err1, rows) => {
            if (err1) throw err1;
            //setValue(result);

            res.render('home', {
                //random cars
                //brand or if undefined its dontDesplayThat
                carInformation1: {
                    id: rows[numbers[0]].id,
                    brand: rows[numbers[0]].brand,
                    model: rows[numbers[0]].model,
                    price: rows[numbers[0]].price,
                    img: '/img/' + rows[numbers[0]].img
                },
                carInformation2: {
                    id: rows[numbers[1]].id,
                    brand: rows[numbers[1]].brand,
                    model: rows[numbers[1]].model,
                    price: rows[numbers[1]].price,
                    img: '/img/' + rows[numbers[1]].img
                },
                carInformation3: {
                    id: rows[numbers[2]].id,
                    brand: rows[numbers[2]].brand,
                    model: rows[numbers[2]].model,
                    price: rows[numbers[2]].price,
                    img: '/img/' + rows[numbers[2]].img
                },
                carInformation4: {
                    id: rows[numbers[3]].id,
                    brand: rows[numbers[3]].brand,
                    model: rows[numbers[3]].model,
                    price: rows[numbers[3]].price,
                    img: '/img/' + rows[numbers[3]].img
                },
                carInformation5: {
                    id: rows[numbers[4]].id,
                    brand: rows[numbers[4]].brand,
                    model: rows[numbers[4]].model,
                    price: rows[numbers[4]].price,
                    img: '/img/' + rows[numbers[4]].img
                },
                carInformation6: {
                    id: rows[numbers[5]].id,
                    brand: rows[numbers[5]].brand,
                    model: rows[numbers[5]].model,
                    price: rows[numbers[5]].price,
                    img: '/img/' + rows[numbers[5]].img
                },
                isLogin: isLogin,
                incorrectP: incorrectP,
                enterP: enterP,
                username: username,
                enterR: enterRegister,
                otherPasswd: otherPasswd,
                busyLogin: busyLogin
            });

        });
    });
};