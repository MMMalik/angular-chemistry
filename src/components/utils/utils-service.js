(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.factory("ChemUtils", ChemUtils);
		
	function ChemUtils() {
		var service = {};
		
		service.parseFormula = function (formula, options) {
			var match = formula.match(/\d+|\_\(.*?\)+|\^\(.*?\)+|\^\d*[\-\+]|[^\_\^\d]+/g),			
				result = "";
			match.forEach(function (el) {				
				if (el.substr(0, 2) === "^(") {
					el = typeof options === "object" && typeof options.sup === "string" ?
						"<sup class=\"" + options.sup + "\">" + el.substr(2, el.length - 3) + "</sup>":
						"<sup>" + el.substr(2, el.length - 3) + "</sup>";
				} else if (el.charAt(0) === "^") {
					el = typeof options === "object" && typeof options.sup === "string" ?
						"<sup class=\"" + options.sup + "\">" + el.substr(1) + "</sup>":
						"<sup>" + el.substr(1) + "</sup>";
				} else if (result.match(/[\)\]\}\>A-Za-z]$/) && isFinite(el)) {
					el = typeof options === "object" && typeof options.sub === "string" ?
						"<sub class=\"" + options.sub + "\">" + el + "</sub>":
						"<sub>" + el + "</sub>";
				} else if (el.substr(0, 2) === "_(") {
					el = "<sub>" + el.substr(2, el.length - 3) + "</sub>";
				}
				result += el;
			});
			return result;
		}
		
		return service;
	}
})();