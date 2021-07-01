const express = require('express');
const router = express();

const conexion = require('./database/db');

const billetera = require('./controllers/Billetera');
router.get('/billetera/index' , billetera.index);
router.post('/billetera/save', billetera.save);
router.post('/billetera/favorito', billetera.favorito);
router.post('/billetera/delete', billetera.delete);

const transferencia = require('./controllers/Transferencia');
router.post('/transferencia/billetera',transferencia.billetera)
router.post('/transferencia/save',transferencia.save);
router.post('/transferencia/delete',transferencia.delete);


module.exports = router;
