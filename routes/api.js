const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET news */
router.get('/', (req, res) => {
    const browser = req.query.browser || "";
    let sort = req.query.sort || -1;

    if (sort != 1 && sort != -1) sort = -1;

    const findNews = News
        .find({ title: new RegExp(browser.trim(), 'i') })
        .sort({ created: sort })
        .select('_id title description');
    ;

    findNews.exec((err, data) => {
        res.json(data);
    })
});

router.get('/:id', (req, res) => {

    const findNews = News
        .findById(req.params.id)
        .select('_id title description');
    ;

    findNews.exec((err, data) => {
        res.json(data);
    })
});

module.exports = router;
