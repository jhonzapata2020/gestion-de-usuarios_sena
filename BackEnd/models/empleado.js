const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmpleadoSchema = new Schema({
    td: {type:String, require:true},
    firstName: {type:String, require:true},
    middleName: {type:String, require:true},
    lastName: {type:String, require:true},
    secondSurname: {type:String, require:true},
    sexo: {type:String, require:true},
    
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
