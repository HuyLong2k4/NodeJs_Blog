const Course = require('../models/Course');
const Category = require('../models/Category');


class CoursesController {
    async show(req, res) {
        try {
            var course = await Course.findOne({ slug: req.params.slug });
            var categories = await Category.find({}).lean();
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.render('books/bookdetail', { 
                categories,
                course: course.toObject() 
                });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
    // GET
    async create(req, res) {
        try {
            var categories = await Category.find({}).lean();
            res.render('books/createbook', 
                {
                    categories
                }
            );
        }
        catch {
            res.status(400).json({ error: 'Error' });
        }
    }
    //POST
    async store(req, res) {
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
    // GET /courses/:id/edit
    async edit(req, res) {
        try {
            var course = await Course.findById(req.params.id);
            res.render('books/updatebook', {
                course: course.toObject(),
            });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
    // PUT /courses/:id
    async update(req, res) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/client/stored/book'))
            .catch((err) => {});
    }

    async destroy(req, res) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/client/stored/book'))
            .catch((err) => {});
    }

    async restore(req, res) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/client/trash'))
            .catch((err) => {});
    }
   
}

module.exports = new CoursesController();
