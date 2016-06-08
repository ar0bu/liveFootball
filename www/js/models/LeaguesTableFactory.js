(function () {

	'use strict';

	function LeaguesTableFactory($http, urls){

		function LeaguesTable() {}

		angular.extend(LeaguesTable.prototype, {
			
			getLeagues: function () {
				var getLeague = {
					method: 'GET',
					url: urls.BASE_API,
					headers: urls.HEAD
				}
				return $http(getLeague);
			},

			getLeague: function (leagueID) {
				var getLeague = {
					method: 'GET',
					url: urls.BASE_API + leagueID,
					headers: urls.HEAD
				}
				return $http(getLeague);
			},

			getTeams: function (leagueID){
				var getTeams = {
					method: 'GET',
					url: urls.BASE_API + leagueID + "/teams",
					headers: urls.HEAD
				}
				return $http(getTeams);
			},

			getFixtures: function(leagueID){
				var getFixtures = {
					method: 'GET',
					url: urls.BASE_API + leagueID + "/fixtures",
					headers: urls.HEAD
				}
				return $http(getFixtures);
			},

			getTables: function (leagueID){
				var getTables = {
					method: 'GET',
					url: urls.BASE_API + leagueID + "/leagueTable",
					headers: urls.HEAD
				}
				return $http(getTables);
			},

			getTeam: function (teamID){
				var getTeam = {
					method: 'GET',
					url: urls.TEAM_URL + "/" + teamID,
					headers: urls.HEAD
				}
				return $http(getTeam);
			},

		});

		return LeaguesTable;
	}

	LeaguesTableFactory
		.$inject = ['$http', 'urls'];

	angular
		.module('liveFootball')
		.factory('LeaguesTableFactory', LeaguesTableFactory);

}())