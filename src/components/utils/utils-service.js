(function () {
	"use strict"
	angular.module("chemistry")
		.factory("ChemUtils", ChemUtils);
		
	function ChemUtils() {
		var service = {};
		
		service.parseFormula = function (formula) {
			var match = formula.match(/[\[\]\(\)A-Za-z]+|\d+|_\d*[\-\+]/g),
				result = "";
			match.forEach(function (el) {
				if (el.charAt(0) === "_") {
					el = "<sup>" + el.substr(1) + "</sup>";
				} else if (isFinite(el)) {
					el = "<sub>" + el + "</sub>";
				}
				result += el;
			});
			return result;
		}
		
		return service;
	}
})();