const express = require('express');
const router = express.Router();

// GET /api/logs/usuario/:idUsuario
router.get('/usuario/:idUsuario', async (req, res) => {
  const result = await req.db.query(
    "SELECT tipo_accion, descripcion, fecha_hora FROM log_actividad WHERE id_usuario = $1;", [req.params.idUsuario]);
  res.json(result.rows);
});

// GET /api/logs/caso/:idCaso
router.get('/caso/:idCaso', async (req, res) => {
  const result = await req.db.query(
    "SELECT tipo_accion, descripcion, fecha_hora FROM log_actividad WHERE caso_id_relacionado = $1;", [req.params.idCaso]);
  res.json(result.rows);
});

module.exports = router;
