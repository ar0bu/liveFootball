(function () {

	'use strict'

	function LeagueFixturesCtrl ($scope, $stateParams, LeaguesTableFactory){

		var self = this,
			leagueName = $stateParams.leagueName,
			leagueFix = new LeaguesTableFactory();

		$scope.lName = leagueName;

		function getLeagueFixture() {
			return leagueFix
					.getFixtures($stateParams.leagueID)
					.then(function (response){
						$scope.leagueFix = response.data;
					})
					.catch(function (error){
						console.log(error);
					});
		}

		getLeagueFixture();

		return $scope.LeagueFixturesCtrl = self;
	}

	LeagueFixturesCtrl
		.$inject = ['$scope', '$stateParams', 'LeaguesTableFactory'];

	angular
		.module('liveFootball')
		.controller('LeagueFixturesCtrl', LeagueFixturesCtrl);

}())