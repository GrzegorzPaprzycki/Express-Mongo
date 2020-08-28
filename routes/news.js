const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET news */
router.get('/', (req, res) => {
    const browser = req.query.browser || "";

    const findNews = News
        .find({ title: new RegExp(browser.trim(), 'i') })
        .sort({ created: -1 })
        ;

    findNews.exec((err, data) => {
        res.render('news', { title: 'Aktualności', data, browser });
    })
});

module.exports = router;
