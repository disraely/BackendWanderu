var mongoose = require('mongoose');

var VueloSchema = new mongoose.Schema({
	ciudad: String,
	aeropuerto: Boolean,
	direccion: String
});

mongoose.model('Vuelo', VueloSchema);