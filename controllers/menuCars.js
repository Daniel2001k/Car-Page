const connection = require('../config/database');

function mainSearch(par, par1, par2, req, res) {
    connection.query(`SELECT COUNT(id) AS count FROM cars WHERE country = '${ par }'`, (err, result) => {
        if (err) throw err;

        let numberRows = result[0].count;

        class Parameters {
            constructor(id, country, brand, model, price, power, mileage, img) {
                this.id = id;
                this.country = country;
                this.brand = brand;
                this.model = model;
                this.price = price;
                this.power = power;
                this.mileage = mileage;
                this.img = '/img/' + img;
            }
        }

        let isLogin = (req.session.loggedin) ? true : false;
        let incorrectP = (req.session.incorrectPass) ? true : false;
        let enterP = (req.session.enterPass) ? true : false;
        let username = req.session.username;
        let enterRegister = (req.session.enterRegister) ? true : false;
        let otherPasswd = (req.session.otherPasswd) ? true : false;
        let busyLogin = (req.session.busyLogin) ? true : false;
        let country = par;
        let c1 = par1;
        let c2 = par2;
        let brand = "";
        let model = "";
        let priceFrom = "";
        let priceTo = "";
        let powerFrom = "";
        let powerTo = "";
        let mileageFrom = "";
        let mileageTo = "";

        connection.query(`SELECT * FROM cars WHERE country = '${ par }'`, (err1, rows) => {
            if (err1) throw err1;

            var parametersArray = new Array(numberRows);
            for (let i = 0; i < numberRows; i++) {
                parametersArray[i] = new Parameters(rows[i].id, rows[i].country, rows[i].brand, rows[i].model, rows[i].price, rows[i].power, rows[i].mileage, rows[i].img);
            }
            res.render('carsFiltr',{
                parametersArray: parametersArray,
                numberRows: numberRows,
                country: country,
                c1: c1,
                c2: c2,
                brand: brand,
                model: model,
                priceFrom: priceFrom,
                priceTo: priceTo,
                powerFrom: powerFrom,
                powerTo: powerTo,
                mileageFrom: mileageFrom,
                mileageTo: mileageTo,
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
}

function sideSearch(par1, par4, par3, par2, req, res) {
    connection.query(`SELECT COUNT(id) AS count FROM cars WHERE brand = '${ par2 }'`, (err, result) => {
        if (err) throw err;

        let numberRows = result[0].count;

        class Parameters {
            constructor(id, country, brand, model, price, power, mileage, img) {
                this.id = id;
                this.country = country;
                this.brand = brand;
                this.model = model;
                this.price = price;
                this.power = power;
                this.mileage = mileage;
                this.img = '/img/' + img;
            }
        }

        let isLogin = (req.session.loggedin) ? true : false;
        let incorrectP = (req.session.incorrectPass) ? true : false;
        let enterP = (req.session.enterPass) ? true : false;
        let username = req.session.username;
        let enterRegister = (req.session.enterRegister) ? true : false;
        let otherPasswd = (req.session.otherPasswd) ? true : false;
        let busyLogin = (req.session.busyLogin) ? true : false;
        let country = par1;
        let c1 = par3;
        let c2 = par4;
        let brand = "";
        let model = "";
        let priceFrom = "";
        let priceTo = "";
        let powerFrom = "";
        let powerTo = "";
        let mileageFrom = "";
        let mileageTo = "";

        connection.query(`SELECT * FROM cars WHERE brand = '${ par2 }'`, (err1, rows) => {
            if (err1) throw err1;

            var parametersArray = new Array(numberRows);
            for (let i = 0; i < numberRows; i++) {
                parametersArray[i] = new Parameters(rows[i].id, rows[i].country, rows[i].brand, rows[i].model, rows[i].price, rows[i].power, rows[i].mileage, rows[i].img);
            }
            res.render('carsFiltr',{
                parametersArray: parametersArray,
                numberRows: numberRows,
                country: country,
                c1: c1,
                c2: c2,
                brand: brand,
                model: model,
                priceFrom: priceFrom,
                priceTo: priceTo,
                powerFrom: powerFrom,
                powerTo: powerTo,
                mileageFrom: mileageFrom,
                mileageTo: mileageTo,
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
}

function formSearch(req, res) {
    let pom1 = (req.body.country) ? req.body.country : null;
    let pom2 = (req.body.brand) ? req.body.brand : null;
    let pom3 = (req.body.model) ? req.body.model : null;
    let pom4 = (req.body.priceFrom) ? req.body.priceFrom : 0;
    let pom5 = (req.body.priceTo) ? req.body.priceTo : 999999999;
    let pom6 = (req.body.powerFrom) ? req.body.powerFrom : 0;
    let pom7 = (req.body.powerTo) ? req.body.powerTo : 999999999;
    let pom8 = (req.body.mileageFrom) ? req.body.mileageFrom : 0;
    let pom9 = (req.body.mileageTo) ? req.body.mileageTo : 999999999;

    let sql = `SELECT COUNT(id) AS count FROM cars WHERE country = '${ pom1 }' AND brand = '${ pom2 }' AND model = '${ pom3 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
    let sql1 = `SELECT * FROM cars WHERE country = '${ pom1 }' AND brand = '${ pom2 }' AND model = '${ pom3 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;

    if (pom1 === null) {
        sql = `SELECT COUNT(id) AS count FROM cars WHERE price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
        sql1 = `SELECT * FROM cars WHERE price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
    }
    else if (pom2 === null) {
        sql = `SELECT COUNT(id) AS count FROM cars WHERE country = '${ pom1 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
        sql1 = `SELECT * FROM cars WHERE country = '${ pom1 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
    }
    else if (pom3 === null) {
        sql = `SELECT COUNT(id) AS count FROM cars WHERE country = '${ pom1 }' AND brand = '${ pom2 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
        sql1 = `SELECT * FROM cars WHERE country = '${ pom1 }' AND brand = '${ pom2 }' AND price BETWEEN ${ pom4 } AND ${ pom5 } AND power BETWEEN ${ pom6 } AND ${ pom7 } AND mileage BETWEEN ${ pom8 } AND ${ pom9 }`;
    }

    connection.query(sql, (err, result) => {
        if (err) throw err;

        let numberRows = result[0].count;

        class Parameters {
            constructor(id, country, brand, model, price, power, mileage, img) {
                this.id = id;
                this.country = country;
                this.brand = brand;
                this.model = model;
                this.price = price;
                this.power = power;
                this.mileage = mileage;
                this.img = '/img/' + img;
            }
        }

        let isLogin = (req.session.loggedin) ? true : false;
        let incorrectP = (req.session.incorrectPass) ? true : false;
        let enterP = (req.session.enterPass) ? true : false;
        let username = req.session.username;
        let enterRegister = (req.session.enterRegister) ? true : false;
        let otherPasswd = (req.session.otherPasswd) ? true : false;
        let busyLogin = (req.session.busyLogin) ? true : false;
        let country = "Germany";
        let c1 = "Japan";
        let c2 = "USA";
        let brand = "";
        let model = "";
        let priceFrom = "";
        let priceTo = "";
        let powerFrom = "";
        let powerTo = "";
        let mileageFrom = "";
        let mileageTo = "";

        connection.query(sql1, (err1, rows) => {
            if (err1) throw err1;

            var parametersArray = new Array(numberRows);
            for (let i = 0; i < numberRows; i++) {
                parametersArray[i] = new Parameters(rows[i].id, rows[i].country, rows[i].brand, rows[i].model, rows[i].price, rows[i].power, rows[i].mileage, rows[i].img);
            }
            res.render('carsFiltr',{
                parametersArray: parametersArray,
                numberRows: numberRows,
                country: country,
                c1: c1,
                c2: c2,
                brand: brand,
                model: model,
                priceFrom: priceFrom,
                priceTo: priceTo,
                powerFrom: powerFrom,
                powerTo: powerTo,
                mileageFrom: mileageFrom,
                mileageTo: mileageTo,
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
}

exports.carsfiltrGermany = (req, res) => {
    mainSearch('Germany', 'Japan', 'USA', req, res);
};
exports.carsfiltrJapan = (req, res) => {
    mainSearch('Japan', 'Germany', 'USA', req, res);
};
exports.carsfiltrUsa = (req, res) => {
    mainSearch('USA', 'Germany', 'Japan', req, res);
};

exports.carsfiltrGermanyAudi = (req, res) => {
    sideSearch('Germany', 'Japan', 'USA', 'Audi', req, res);
};
exports.carsfiltrGermanyBmw = (req, res) => {
    sideSearch('Germany', 'Japan', 'USA', 'BMW', req, res);
};
exports.carsfiltrGermanyMercedesBenz = (req, res) => {
    sideSearch('Germany', 'Japan', 'USA', 'Mercedes-Benz', req, res);
};
exports.carsfiltrJapanNissan = (req, res) => {
    sideSearch('Japan', 'Germany', 'USA', 'Nissan', req, res);
};
exports.carsfiltrJapanToyota = (req, res) => {
    sideSearch('Japan', 'Germany', 'USA', 'Toyota', req, res);
};
exports.carsfiltrJapanMazda = (req, res) => {
    sideSearch('Japan', 'Germany', 'USA', 'Mazda', req, res);
};
exports.carsfiltrJapanSubaru = (req, res) => {
    sideSearch('Japan', 'Germany', 'USA', 'Subaru', req, res);
};
exports.carsfiltrJapanMitsubishi = (req, res) => {
    sideSearch('Japan', 'Germany', 'USA', 'Mitsubishi', req, res);
};
exports.carsfiltrUsaDodge = (req, res) => {
    sideSearch('USA', 'Germany', 'Japan', 'Dodge', req, res);
};
exports.carsfiltrUsaFord = (req, res) => {
    sideSearch('USA', 'Germany', 'Japan', 'Ford', req, res);
};
exports.carsfiltrUsaChevrolet = (req, res) => {
    sideSearch('USA', 'Germany', 'Japan', 'Chevrolet', req, res);
};
exports.carSearching = (req, res) => {
    formSearch(req, res);
};