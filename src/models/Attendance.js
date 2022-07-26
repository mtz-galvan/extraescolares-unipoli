const mongoose = require('mongoose');
const { Schema } = mongoose;

const AttendanceSchema = new Schema({
    id_grupo: {type: String, required: true},
    id_usuario: {type: String, required: true},
    fullname: {type: String, required: true},
    fecha: {type: String, required: true},
    present: {type: String, required: true},
    matricula: {type: String},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Attendance', AttendanceSchema)
