const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListaSchema = new Schema({
    id_actividad: {type: String, required: true},
    id_usuario: {type: String, required: true},
    name: {type: String, required: true},
    carrera: {type: String, required: true},
    cuatrimestre: {type: String, required: true},
    matricula: {type: String},
});

module.exports = mongoose.model('Lista',ListaSchema)
