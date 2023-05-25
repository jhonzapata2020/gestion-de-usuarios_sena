
const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.createUsuarios);
router.get('/:id', usuarioCtrl.getUnicoUsuario);
router.put('/:id', usuarioCtrl.editarUsuario);
router.delete('/:id', usuarioCtrl.eliminarUsuario);

module.exports = router;
