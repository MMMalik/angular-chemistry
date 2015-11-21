(function () {
	"use strict";
	angular.module("angularChemistrySite")
		.controller("IntroductionController", IntroductionController);
		
	function IntroductionController() {
		var vm = this;
		vm.toolsDescription = {
			reactionDirectives: {
				title: "Reaction directives",
				desc: "a set of directives for building chemical reactions",
				api: "api/reaction-directives"
			},
			elementsService: {
				title: "Elements service",
				desc: "basically, it's a Mendeleev's periodic table to be used within your code",
				api: "api/elements"
			},
			pubchemAccess: {
				title: "Pubchem access",
				desc: "a javascript wrapper for Pubchem API",
				api: "api/pubchem-access"
			},
			variousUtils: {
				title: "Various utils",
				desc: "a set of other chemistry-related tools",
				api: "api/various-utils"
			}
		};
	}
})();