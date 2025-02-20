const Course = require('../models/Course');
const Category = require('../models/Category');

class SiteController {
    async index(req, res) {
        try {
            var courses = await Course.find({});
            var categories = await Category.find({}).lean();
            // convert courses để có thể lấy dữ liệu trực tiếp từ moongo
            courses = courses.map((courses) => courses.toObject());
            res.render('home', {
                courses,
                categories,
            });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new SiteController();
