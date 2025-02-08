const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, maxlength: 255 },
    author: { type: String, maxlength: 255 },
    status: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", uniqe: true }
}, {
    timestamps: true,

});

module.exports = mongoose.model('Course', Course);
