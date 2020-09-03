const express = require('express');
const router = express.Router();

const login = 'admin';
const password = '123';

/* GET login page. */
router.get('/', (req, res) => {
    res.render('login', { title: 'Logowanie admina' });
});

router.post('/', (req, res) => {
    const body = req.body;
    if (body.login === login && body.password === password) {
        req.session.admin = 1;
        res.redirect('/admin');
    } else {
        res.render('login', { title: 'Logowanie admina' });
    }
})

module.exports = router;
