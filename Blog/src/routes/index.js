var newsRouter = require('./news');
var siteRouter = require('./site');
var coursesRouter = require('./courses');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
