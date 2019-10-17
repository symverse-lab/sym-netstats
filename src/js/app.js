'use strict';

/* Init Angular App */

var symStatsApp = angular.module('symStatsApp', ['symStatsApp.filters', 'symStatsApp.directives', 'ngStorage']);


/* Services */

symStatsApp.factory('socket', function ($rootScope) {
	var socket = new Primus();
	return socket;
});

symStatsApp.factory('toastr', function ($rootScope) {
	toastr = window.toastr;
	toastr.options = {
		"closeButton": false,
		"debug": false,
		"progressBar": false,
		"newestOnTop": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};
	return toastr;
});

symStatsApp.factory('_', function ($rootScope) {
	var lodash = window._;
	return lodash;
});
