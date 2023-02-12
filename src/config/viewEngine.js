const express = require('express');
const hbs = require('express-handlebars');

const setupDefaultTitle = require('../middlewares/setupDefaultTitle');

function setupViewEngine(app) {
    app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
    app.set('view engine', '.hbs');

    app.set('views', './src/views');

    app.use(express.static('src/static'));
    app.use(express.urlencoded({ extended: false }));

    app.use(setupDefaultTitle('Cubicle'));

}

module.exports = setupViewEngine;

