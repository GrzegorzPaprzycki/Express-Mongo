const express = require('express');
const router = express.Router();

/* GET news */
router.get('/', (req, res) => {
    res.render('news', { title: 'Aktualności' });
});

module.exports = router;
