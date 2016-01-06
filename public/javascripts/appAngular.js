angular.module("Wanderu", ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('index',{
				url:'/index',
				templateUrl: 'pages/dashboard.html',
				controller: 'ctrlDashboard'
			});
			$urlRouterProvider.otherwise('index');
		}
	)
	.factory('wanderuData', function($http){
		var wanderuData = {};
		wanderuData.rutas = [];

  		wanderuData.ruta = {};

  		//metodos remotos
  		wanderuData.getAll = function(){
  			return $http.get('/ruta')
  			.success(function(data){
  				angular.copy(data, wanderuData.rutas);
  				return wanderuData.rutas;
  			});
  		};

  		return wanderuData;
	})
	.controller('ctrlDashboard', function($scope, wanderuData){
		wanderuData.getAll();
		$scope.rutas = wanderuData.rutas;
	});