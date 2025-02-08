class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('Long');
    }
}

module.exports = new NewsController();
