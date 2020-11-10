const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const formController = require('../controllers/formController');
const adminDashboard = require('../controllers/admindashboard');
const menuCars = require('../controllers/menuCars');
const articlePage = require('../controllers/articlePage');

router.get('/', homeController.home);
router.get('/admindashboard', adminDashboard.dashborad);
router.get('/carsfiltrGermany', menuCars.carsfiltrGermany);
router.get('/carsfiltrGermanyAudi', menuCars.carsfiltrGermanyAudi);
router.get('/carsfiltrGermanyBmw', menuCars.carsfiltrGermanyBmw);
router.get('/carsfiltrGermanyMercedesBenz', menuCars.carsfiltrGermanyMercedesBenz);
router.get('/carsfiltrJapan', menuCars.carsfiltrJapan);
router.get('/carsfiltrJapanNissan', menuCars.carsfiltrJapanNissan);
router.get('/carsfiltrJapanToyota', menuCars.carsfiltrJapanToyota);
router.get('/carsfiltrJapanMazda', menuCars.carsfiltrJapanMazda);
router.get('/carsfiltrJapanSubaru', menuCars.carsfiltrJapanSubaru);
router.get('/carsfiltrJapanMitsubishi', menuCars.carsfiltrJapanMitsubishi);
router.get('/carsfiltrUsa', menuCars.carsfiltrUsa);
router.get('/carsfiltrUsaDodge', menuCars.carsfiltrUsaDodge);
router.get('/carsfiltrUsaFord', menuCars.carsfiltrUsaFord);
router.get('/carsfiltrUsaChevrolet', menuCars.carsfiltrUsaChevrolet);

router.get('/articlePage/1', articlePage.page1);
router.get('/articlePage/2', articlePage.page2);
router.get('/articlePage/3', articlePage.page3);
router.get('/articlePage/4', articlePage.page4);
router.get('/articlePage/5', articlePage.page5);
router.get('/articlePage/6', articlePage.page6);
router.get('/articlePage/7', articlePage.page7);
router.get('/articlePage/8', articlePage.page8);
router.get('/articlePage/9', articlePage.page9);
router.get('/articlePage/10', articlePage.page10);
router.get('/articlePage/11', articlePage.page11);
router.get('/articlePage/12', articlePage.page12);
router.get('/articlePage/13', articlePage.page13);

router.post('/addarticle', adminDashboard.addarticle);
router.post('/deletearticle', adminDashboard.deletearticle);
router.post('/deleteuser', adminDashboard.deleteuser);
router.post('/login', formController.login);
router.post('/signin', formController.signin);
router.post('/logout', formController.logout);
router.post('/carSearching', menuCars.carSearching);

module.exports = router;