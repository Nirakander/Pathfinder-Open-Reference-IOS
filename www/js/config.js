pathfinder.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state("home", {
    url: "/",
    templateUrl: "home.html"
  });
  
  $urlRouterProvider.otherwise("/");

});