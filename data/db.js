const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:team18@cluster0-gzrvd.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

module.exports = mongoose;
