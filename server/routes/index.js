const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.json({username:'CTS4u'}));
router.get('/group', (req, res)=>res.json({username:'dev group. cts'}));

module.exports = router;