(function () {

	'use strict';

	function LeagueTeamsCtrl ($scope, $stateParams, LeaguesTableFactory){

		var self = this,
			teamID,
			leagueName = $stateParams.leagueName,
			leagueTeams = new LeaguesTableFactory();

		$scope.lName = leagueName;
		
		function getTeamsInfo() {
			return leagueTeams
					.getTeams($stateParams.leagueID)
					.then(function (response){
						$scope.leagueTeams = response.data;
					})
					.catch(function (error){
						console.log(error);
					});
		}

		getTeamsInfo();

		return $scope.LeagueTeamsCtrl = self;
	}

	LeagueTeamsCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory']

	angular
		.module('liveFootball')
		.controller('LeagueTeamsCtrl', LeagueTeamsCtrl);
}())