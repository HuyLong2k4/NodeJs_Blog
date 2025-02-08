const Course = require('../models/Course');

class SiteController {
    async index(req, res) {
        try {
            var courses = await Course.find({});
            // convert courses để có thể lấy dữ liệu trực tiếp từ moongo
            courses = courses.map((courses) => courses.toObject());
            res.render('home', {
                courses,
            });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new SiteController();
