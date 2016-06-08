(function () {

	'use strict';

	function TeamInfoCtrl ($scope, $stateParams, LeaguesTableFactory) {

		var self = this,
			getTeamLink = $stateParams.teamID,
			getTeamID,
			teamInfo = new LeaguesTableFactory();

			getTeamID = getTeamLink.split('/').slice(-1)[0].split('?')[0];

		function getTeamInfo() {
			return teamInfo
					.getTeam($stateParams.teamID = getTeamID)
					.then(function (response){
						$scope.teamInfo = response.data;
					})
					.catch(function (error){
						console.log(error);
					});
		}

		getTeamInfo();

		return $scope.TeamInfoCtrl = self;
	}

	TeamInfoCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory'];

	angular
		.module('liveFootball')
		.controller('TeamInfoCtrl', TeamInfoCtrl);

}())