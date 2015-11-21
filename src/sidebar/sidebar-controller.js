(function () {
	"use strict";
	angular.module("angularChemistrySite")
		.controller("SidebarController", SidebarController);
		
	function SidebarController() {
		var vm = this;
		vm.linksInner = ["", "Home", "Download", "Introduction", "Api", "Examples", "Help", "License"];
		vm.linksOuter = {
			"Github": "https://github.com/MMMalik/angular-chemistry"
		}
	}
})();