const express = require('express')
const router = express.Router()


/* GET healthz */
router.get('/', async (req, res) => {
  res.status(201).send("OK");
});

module.exports = router;
