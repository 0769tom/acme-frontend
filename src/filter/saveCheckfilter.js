angular.module('acme').filter('saveCheckfilter', function ($rootScope) {
  return function (key) {

      if($rootScope.checkobj[key] || $rootScope.coedobj[key]){
         // console.log(key)
          return true;
      } else {
          return false;
          
      }
  }
});
