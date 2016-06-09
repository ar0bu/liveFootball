(function () {

	'use strict'

	function TeamFixturesCtrl($scope, $stateParams, LeaguesTableFactory) {

		var self = this,
			getTeamLink = $stateParams.teamID,
			getTeamID,
			teamName = $stateParams.teamName,
			teamFix = new LeaguesTableFactory();

			getTeamID = getTeamLink.split('/').slice(-2)[0].split('/')[0];

			$scope.tName = teamName;

		function getTeamFix () {
			return teamFix
					.getTeamFix($stateParams.teamID = getTeamID)
					.then(function (response){
						$scope.teamFixtures = response.data;
					})
					.catch(function (error) {
						console.log(error)
					});
		}

		getTeamFix();

		return $scope.TeamFixturesCtrl = self;
	}

	TeamFixturesCtrl
		.$inject =['$scope', '$stateParams', 'LeaguesTableFactory'];

	angular
		.module('liveFootball')
		.controller('TeamFixturesCtrl', TeamFixturesCtrl);

}())