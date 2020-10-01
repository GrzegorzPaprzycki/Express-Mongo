const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET admin page. */
router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('/login');
    } else next();
});

router.get('/', (req, res) => {
    News.find({}, (err, data) => {
        console.log(data);
        res.render('admin/index', { title: 'Strona admina', data });
    })
})

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', { title: 'Admin - dodawanie atrykułu', body: '' })
})

router.post('/news/add', (req, res) => {
    const body = req.body;
    const newArticle = new News(body);
    const error = newArticle.validateSync();
    newArticle.save();
    if (error) res.render('admin/news-form', { title: 'Admin - dodawanie atrykułu', body, error })
    else res.redirect('/admin');
})

router.get('/news/delete/:id', (req, res) => {
    const id = req.params.id;

    News.findByIdAndDelete(id).exec();

    res.redirect('/admin');
})

module.exports = router;
