/**
 * Created by zenking on 16/6/27.
 */
angular.module('acme').filter('timestampFilter', function($filter) {
    return function (timestamp) {
        return AcmeJS.utils.format.fullTimestamp(timestamp);
    }
});
