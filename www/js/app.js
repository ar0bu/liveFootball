(function() {

    'use strict';

    angular.module('liveFootball', ['ionic'])
    .constant('urls', {
        BASE: 'http://api.football-data.org/',
        BASE_API: 'http://api.football-data.org/v1/soccerseasons/',
        TEAM_URL: 'http://api.football-data.org/v1/teams',
        HEAD: {
            'X-Auth-Token': 'e7486677a2dd4260b7aeb8a464749e80'
        }
    });

    function liveFootbalConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tabs",
                abstract: true,
                templateUrl: "views/components/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('tabs.league-info', {
                url: "/league-info",
                params: {leagueID : null},
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/league-info.html",
                        controller: 'LeagueInfoCtrl'
                    }
                }
            })
            .state('tabs.league-teams', {
                url: "/league-teams",
                params: {leagueID: null, leagueName: null},
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/league-teams.html",
                        controller: 'LeagueTeamsCtrl'
                    }
                }
            })
            .state('tabs.league-fix', {
                url: "/league-fix",
                params: {leagueID: null, leagueName: null},
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/league-fix.html",
                        controller: "LeagueFixturesCtrl"
                    }
                }
            })
            .state('tabs.league-table', {
                url: "/league-table",
                params: {leagueID: null, leagueName: null, teamID: null},
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/league-table.html",
                        controller: 'LeagueTableCtrl'
                    }
                }
            })
            .state('tabs.team-info', {
                url: "/team-info",
                params: {teamID: null},
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/team-info.html",
                        controller:'TeamInfoCtrl'
                    }
                }
            })
            .state('tabs.team-fix', {
                url: "/team-fix",
                params: {teamID: null, teamName: null},
                views: {
                    'main-tab': {
                        templateUrl: "/views/partials/team-fix.html",
                        controller: 'TeamFixturesCtrl'
                    }
                }
            })
            .state('tabs.team-player', {
                url: "/team-player",
                params: {teamID: null, teamName: null},
                views: {
                    'main-tab': {
                        templateUrl: "/views/partials/team-player.html",
                        controller: 'TeamPlayerCtrl'
                    }
                }
            })
            .state('tabs.about', {
                url: "/about",
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/about.html"
                    }
                }
            })
            .state('tabs.contact', {
                url: "/contact",
                views: {
                    'main-tab': {
                        templateUrl: "views/partials/contact.html"
                    }
                }
            });

        $urlRouterProvider.otherwise("/tabs/home");

    }

    function liveFootballRun ($ionicPlatform){
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    liveFootbalConfig
        .$inject = ['$stateProvider', '$urlRouterProvider'];

    liveFootballRun
        .$inject = ['$ionicPlatform'];

    angular.module('liveFootball')
        .config(liveFootbalConfig)
        .run(liveFootballRun);

}());
