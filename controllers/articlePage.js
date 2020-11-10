const connection = require('../config/database');

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

class Pages {
    constructor (id) {
        this.id = id;
    }

    renderPage(req, res) {

        connection.query(`SELECT * FROM cars WHERE id = ${ this.id }`, (err, rows) => {
            if (err) throw err;

            const car = new Parameters(rows[0].id, rows[0].country, rows[0].brand, rows[0].model, rows[0].price, rows[0].power, rows[0].mileage, rows[0].img);
            res.render('articlePage', {
                car: car,
                isLogin: req.session.loggedin,
                incorrectP: req.session.incorrectPass,
                enterP: req.session.enterPass,
                username: req.session.username,
                enterR: req.session.enterRegister,
                otherPasswd: req.session.otherPasswd,
                busyLogin: req.session.busyLogin
            });
        });
    }
}

exports.page1 = (req, res) => {
    const pag = new Pages(1);
    pag.renderPage(req, res);
};
exports.page2 = (req, res) => {
    const pag = new Pages(2);
    pag.renderPage(req, res);
};
exports.page3 = (req, res) => {
    const pag = new Pages(3);
    pag.renderPage(req, res);
};
exports.page4 = (req, res) => {
    const pag = new Pages(4);
    pag.renderPage(req, res);
};
exports.page5 = (req, res) => {
    const pag = new Pages(5);
    pag.renderPage(req, res);
};
exports.page6 = (req, res) => {
    const pag = new Pages(6);
    pag.renderPage(req, res);
};
exports.page7 = (req, res) => {
    const pag = new Pages(7);
    pag.renderPage(req, res);
};
exports.page8 = (req, res) => {
    const pag = new Pages(8);
    pag.renderPage(req, res);
};
exports.page9 = (req, res) => {
    const pag = new Pages(9);
    pag.renderPage(req, res);
};
exports.page10 = (req, res) => {
    const pag = new Pages(10);
    pag.renderPage(req, res);
};
exports.page11 = (req, res) => {
    const pag = new Pages(11);
    pag.renderPage(req, res);
};
exports.page12 = (req, res) => {
    const pag = new Pages(12);
    pag.renderPage(req, res);
};
exports.page13 = (req, res) => {
    const pag = new Pages(13);
    pag.renderPage(req, res);
};