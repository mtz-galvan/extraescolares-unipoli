const mongoose = require('mongoose');
const { Schema } = mongoose;

const CurseSchema = new Schema({
    img: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    place: {type: String },
    date: {type: Date },
    hour: {type: String },
    dueDate: {type: Date }
});

module.exports = mongoose.model('Curse',CurseSchema)
