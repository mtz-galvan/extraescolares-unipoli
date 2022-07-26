const mongoose = require('mongoose');
const { Schema } = mongoose;

const ActividadSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true},
    limit: {type: Number, required: true},
    teacher: {type: String },
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Actividad',ActividadSchema)
