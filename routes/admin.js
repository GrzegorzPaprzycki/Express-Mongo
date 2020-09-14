const express = require('express');
const router = express.Router();

/* GET admin page. */
router.get('/', (req, res) => {
    if (req.session.admin) {
        res.render('admin/index', { title: 'Admin' });
    } else {
        res.redirect('/login');
    }
});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', { title: 'Admin - dodawanie atrykułu' })
})

module.exports = router;
