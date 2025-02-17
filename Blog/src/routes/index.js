var newsRouter = require('./news');
var siteRouter = require('./site');
var coursesRouter = require('./courses');
var clientRouter = require('./client');
var categoryRouter = require('./category');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/category', categoryRouter);
    app.use('/courses', coursesRouter);
    app.use('/client', clientRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
