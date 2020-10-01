var mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Pole TYTUŁ jest wymagane'] },
    description: { type: String, required: [true, 'Pole OPIS jest wymagane'] },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);