(function () {

	'use strict';

	function LeagueInfoCtrl ($scope, $stateParams, LeaguesTableFactory){

		var self = this,
			leagueInfo = new LeaguesTableFactory();

		function getLeagueInfo() {
			return leagueInfo
					.getLeague($stateParams.leagueID)
					.then(function (response){
						$scope.leagueInfo = response.data;
					})
					.catch(function (error){
						console.log(error);
					});
		}

		getLeagueInfo();

		return $scope.LeagueInfoCtrl = self;
	}

	LeagueInfoCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory']

	angular
		.module('liveFootball')
		.controller('LeagueInfoCtrl', LeagueInfoCtrl);
}())