const express = require('express');
const router = express.Router();
const News = require('../models/news');

/* GET news */
router.get('/', (req, res) => {
    const exampleNews = new News({
        title: 'Przykladowy tytul',
        description: 'Przykladowy opis'
    });
    exampleNews.save();
    res.render('news', { title: 'Aktualności' });
});

module.exports = router;
