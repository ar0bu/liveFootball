(function () {

	'use strict';

	function LeagueTableCtrl ($scope, $stateParams, LeaguesTableFactory){

		var self = this,
			leagueName = $stateParams.leagueName,
			getTeamID,
			leagueTable = new LeaguesTableFactory();

		$scope.lName = leagueName;

		function getLeagueTable (){
			return leagueTable
					.getTables($stateParams.leagueID)
					.then(function (response) {
						$scope.leagueTable = response.data;
						console.log($scope.leagueTable);
					})
					.catch(function (error) {
						console.log(error);
					})
		}

		getLeagueTable();

		return $scope.LeagueTableCtrl = self;
	}

	LeagueTableCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory'];

	angular
		.module('liveFootball')
		.controller('LeagueTableCtrl', LeagueTableCtrl);

}());
