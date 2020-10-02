const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET news */
router.get('/', (req, res) => {
    const findNews = News
        .find({})
        .select(['title', 'created'])
        .sort({ created: -1 })
        ;
    findNews.exec((err, data) => {
        res.json(data);
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    News.findOne({ _id: id }, (err, data) => {
        res.json(data);
    });
})

module.exports = router;
