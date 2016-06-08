(function () {

	'use strict';

	function HomeCtrl($scope, LeaguesTableFactory, $rootScope){

		var self = this,
			leagueTable = new LeaguesTableFactory();

		function getAllLeagues() {
			return leagueTable
					.getLeagues()
					.then(function (response){
						$scope.leagues = response.data;
					})
					.catch(function (error){
						console.log(error);
					});
		}

		getAllLeagues();

		return $scope.HomeCtrl = self;
	}

	HomeCtrl
		.$inject = ['$scope', 'LeaguesTableFactory', '$rootScope'];

	angular
		.module('liveFootball')
		.controller('HomeCtrl', HomeCtrl);

}());