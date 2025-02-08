const Course = require('../models/Course');

class CoursesController {
    async show(req, res) {
        try {
            var course = await Course.findOne({ slug: req.params.slug });
            if (!course) {
                return res.status(404).send('Course not found');
            }
            res.render('books/bookdetail', { course: course.toObject() });
        } catch (err) {
            res.status(400).json({ error: 'Error' });
        }
    }
    // GET 
    create(req, res) {
        res.render('books/createbook');
    }

    //POST
    async store(req, res) { 
        const course = new Course(req.body)
        course.save()
        .then(() => res.redirect('/'))
        .catch(error => {})
    }   
}

module.exports = new CoursesController();
