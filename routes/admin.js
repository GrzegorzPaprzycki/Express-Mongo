const express = require('express');
const router = express.Router();
const News = require('../models/news');

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('/login');
        return;
    }
    next();
})

/* GET admin */
router.get('/', (req, res) => {
    // const exampleNews = new News({
    //     title: 'Przykladowy tytul',
    //     description: 'Przykladowy opisasdf'
    // })

    // exampleNews.save((err) => {
    //     console.log(err)
    // })

    res.render('admin/index', { title: 'Admin' });
});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', { title: 'Dodaj news' });
})

module.exports = router;
