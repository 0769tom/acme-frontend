angular.module('acme').filter('timeAgoFilter', function($filter) {
	return function (time, fullTime) {
		if (fullTime) {
			return $filter('timestampFilter')(time);
		}
		return AcmeJS.utils.format.timeAgo(time);
	}
});
