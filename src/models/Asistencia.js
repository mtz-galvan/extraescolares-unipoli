const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsistenciaSchema = new Schema({
    id_grupo: {type: String, required: true},
    id_usuario: {type: String, required: true},
    fullname: {type: String, required: true},
    grade: {type: String, required: true},
    matricula: {type: String},
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema)
