const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', (req, res) => {
    if (req.session.admin) {
        res.render('admin', { title: 'Admin' });
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
