var mongoose = require('mongoose');

var RutaSchema = new mongoose.Schema({
	ciudadOrigen: String,
	ciudadDestino: String, 
	Costo: Number
});

mongoose.model('Ruta', RutaSchema);