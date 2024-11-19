const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.listLog);
router.get('/register', customerController.listReg);
router.get('/admin', customerController.listAdmin);
router.get('/index', customerController.listIndex);
router.get('/games', customerController.listGames);
router.get('/about', customerController.listAbout);

router.post('/add', customerController.save);
router.get('/delete/:juegoId', customerController.delete); // parametro de la ruta
router.get('/update/:juegoId', customerController.edit); // parametro de la ruta
router.post('/update/:juegoId', customerController.update); // parametro de la ruta

module.exports = router;