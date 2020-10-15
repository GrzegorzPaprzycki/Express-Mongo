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
    News.find({}, (err, news) => {
        res.render('admin/index', { title: 'Admin', news });
    })
});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', { title: 'Dodaj artykuł', body: {} });
})

router.post('/news/add', (req, res) => {
    const body = req.body;
    const newsData = new News(body)

    const bugs = newsData.validateSync();

    newsData.save((err) => {
        if (err) {
            res.render('admin/news-form', { title: 'Dodaj artykuł', bugs, body });
        } else {
            res.redirect('/admin');
        }
    })
})

router.get('/news/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/admin');
    });
})

module.exports = router;
