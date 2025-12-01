const express = require('express');
const router = express.Router();

// GET /api/evidencias/caso/:idCaso
router.get('/caso/:idCaso', async (req, res) => {
  const result = await req.db.query(
    "SELECT tipo, descripcion, fecha_creacion FROM evidencias WHERE id_caso = $1;", [req.params.idCaso]);
  res.json(result.rows);
});

module.exports = router;
