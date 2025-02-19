const Course = require('../models/Course');
const Category = require('../models/Category');

class ClientsController {
    async storedBook(req, res) {
        try {
            var courses = await Course.find({ deletedAt: null });
            var categories = await Category.find({}).lean();
            // convert courses để có thể lấy dữ liệu trực tiếp từ moongo
            courses = courses.map((courses) => courses.toObject());
            res.render('client/storedbook', {
                courses,
                categories,
            });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
    async trash(req, res) {
        try {
            var courses = await Course.findDeleted({})
            courses = courses.map((courses) => courses.toObject());
            res.render('client/trash', {
                courses
            });
        } catch {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new ClientsController();
