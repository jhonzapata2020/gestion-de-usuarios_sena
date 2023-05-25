const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}

usuarioCtrl.createUsuarios = async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json({
    'status': 'Usuario guardado'
  });
}

usuarioCtrl.getUnicoUsuario = async (req, res) => {
  const usuarioUnico = await Usuario.findById(req.params.id);
  res.json(usuarioUnico);
}

usuarioCtrl.editarUsuario = async (req, res) => {
  const { id } = req.params;
  const usuarioEdit = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  await Usuario.findByIdAndUpdate(id, { $set: usuarioEdit }, { new: true });
  res.json({ status: 'Usuario actualizado' });
}

usuarioCtrl.eliminarUsuario = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ status: 'Usuario eliminado' });
}

module.exports = usuarioCtrl;
