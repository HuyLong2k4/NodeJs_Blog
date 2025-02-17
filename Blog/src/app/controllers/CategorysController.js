const Category = require('../models/Category');
const Course = require('../models/Course');

class CategorysController {
    async show(req, res) {
        try {
            const [courses, categories, category] = await Promise.all([
                Course.find({ category: req.params.name }).lean(),
                Category.find({}).lean(),
                Category.findOne({ name: req.params.name }).lean(),
            ]);
            if (!categories) {
                return res.status(404).send('Course not found');
            }
            res.render('category/categorybook', {
                categories,
                courses,
                category,
            });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
}

module.exports = new CategorysController();
