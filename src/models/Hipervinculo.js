const mongoose = require('mongoose');
const { Schema } = mongoose;

const HipervinculoSchema = new Schema({
    link: {type: String, required: true},
    name: {type: String, required: true},
    descripcion: {type: String},
    categoria: {type: String, required: true},
    destinatarios: {type: String, required: true},
    dueDate: {type: Date, required: true}
});

module.exports = mongoose.model('Hipervinculo', HipervinculoSchema)
