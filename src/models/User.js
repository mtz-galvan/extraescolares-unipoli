const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    apellido: {type: String },
    segundo: {type: String },
    email: {type: String, required: true},
    password: {type: String, required: true},
    student: {type: Boolean},
    career: {type: String },
    group: {type: Number },
    instructor: {type: Boolean},
    admin: {type: Boolean },
    matricula: {type: String, default: 'Pendiente'},
    curse: {type: String },
    service: {type: String },
    valid: {type: Boolean },
    date: {type: Date, default: Date.now}
});

UserSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema)
