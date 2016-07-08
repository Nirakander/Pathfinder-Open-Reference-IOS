pathfinder.factory('databaseService', function($firebaseArray){
  var fb = new Firebase("https://pathfinder-ios.firebaseio.com/");
  var recs = $firebaseArray(fb);
  var recipeService = {
    all: recs,
    get: function(recId){
      return recs.$getRecord(recId);
    }
  };
  return recipeService;
});