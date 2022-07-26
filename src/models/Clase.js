const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClaseSchema = new Schema({
    actividad: {type: String, required: true},
    hora: {type: String, required: true},
    ciclo: {type: String, required: true},
    instructor: {type: String, required: true},
    duracion: {type: String, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Clase',ClaseSchema)
