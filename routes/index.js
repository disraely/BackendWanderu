var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var Ruta = mongoose.model('Ruta');
var Ruta = mongoose.model('Vuelo');

//******************************************************
//rutas
//******************************************************
//GET - Listar
router.get('/ruta', function(req, res, next){
	Ruta.find(function(err, rutas){
		if(err){
			return next(err);
		}
		res.json(rutas);
    }); 
});	

/*
//POST - Agregar
router.post('/politico', function(req, res, next){
	var politico = new Politicos(req.body);

	politico.save(function(err, politico){
		if(err){
			return next(err);
		}
		res.json(politico);
	});	
});

router.post('/opinion', function(req, res, next){
	var opinion = new Opinion(req.body);

	opinion.save(function(err, opinion){
		if(err){
			return next(err);
		}
		res.json(opinion);
	});	
});

//******************************************************
//candidatos
//******************************************************
//GET - Listar
router.get('/candidatos', function(req, res, next){
	Candidatos.find(function(err, candidatos){
		if(err){
			return next(err);
		}
		res.json(candidatos);
	});	
});

//POST - Agregar
router.post('/candidato', function(req, res, next){
	var candidato = new Candidatos(req.body);

	candidato.save(function(err, candidato){
		if(err){
			return next(err);
		}
		res.json(candidato);
	});	
});

//PUT - Actualizar
router.put('/candidato/:id', function(req, res){
	Candidatos.findById(req.params.id, function(err, candidato){
		candidato.nombre = req.body.nombre; 
		candidato.partido = req.body.partido;
		candidato.opiniones = req.body.opiniones;
		candidato.positivas = req.body.positivas;
		candidato.negativas = req.body.negativas;
		candidato.neutras = req.body.neutras;
		candidato.honestidad = req.body.honestidad;
		candidato.simpatizantes = req.body.simpatizantes;
		candidato.detractores = req.body.detractores;

		candidato.save(function(err){
			if(err){
				res.send(err);
			}
			res.json(candidato);
		});	
	});
});

//DELETE - Eliminar
router.delete('/candidato/:id', function(req, res){
	Candidatos.findByIdAndRemove(req.params.id, function(err){
		if(err){
				res.send(err);
		}
		res.json({message: "Se ha eliminado al candidato"});
	});
});
*/
module.exports = router;
