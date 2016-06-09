(function () {

	'use strict';

	function TeamPlayerCtrl($scope, $stateParams, LeaguesTableFactory) {

		var self = this,
			getTeamLink = $stateParams.teamID,
			getTeamID,
			teamName = $stateParams.teamName,
			teamPlayers = new LeaguesTableFactory ();

			getTeamID = getTeamLink.split('/').slice(-2)[0].split('/')[0];

			$scope.tName = teamName;

		console.log($stateParams);

		function getPlayerTeam() {
			return teamPlayers
					.getTeamPlayer($stateParams.teamID = getTeamID)
					.then(function (response) {
						$scope.teamPlayers = response.data.players;

						console.log($scope.teamPlayers.length);
					})
					.catch(function (error){
						console.log(error)
					})
		};

		getPlayerTeam();

		return $scope.TeamPlayerCtrl = self;
	}

	TeamPlayerCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory'];

	angular
		.module('liveFootball')
		.controller('TeamPlayerCtrl', TeamPlayerCtrl);

}())