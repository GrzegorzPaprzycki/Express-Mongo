const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

/* GET quiz */
router.get('/', (req, res) => {
    const show = !req.session.quizVoted;
    let sum = 0;
    const answers = Quiz.find({}, (err, data) => {
        data.forEach(item => {
            sum += item.vote;
        })
        res.render('quiz', { title: 'Quiz', data, show, sum });
    })
});

router.post('/', (req, res) => {
    const choosenAnswerID = req.body.quiz;
    Quiz.findOne({ _id: choosenAnswerID }, (err, data) => {
        data.vote++;
        data.save(() => {
            req.session.quizVoted = 1;
            res.redirect('/quiz');
        });
    })
})

module.exports = router;
