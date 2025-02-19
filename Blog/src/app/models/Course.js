const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, maxlength: 255 },
        description: { type: String, maxlength: 600 },
        image: { type: String, maxlength: 255 },
        author: { type: String, maxlength: 255 },
        category: { type: String, maxlength: 255 },
        status: { type: String, maxlength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);
// Add plugin

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('Course', Course);
