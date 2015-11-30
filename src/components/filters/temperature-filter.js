(function () {
	"use strict";
	angular.module("mmAngularChemistry")
		.filter("temp", Temperature);
		
	function Temperature() {
		
		// converts celcius to kelvins
		function celcToKelv(val) { return val + 273.15; }
		
		// converts kelvins to celsius
		function kelvToCelc(val) { return val - 273.15; }
		
		// converts fahrenheits to celsius
		function fahrToCelc(val) { return 5 * (val - 32) / 9; }
		
		// converts celsius to fahrenheits
		function celcToFahr(val) { return (9 * val / 5) + 32; }
		
		// converts kelvins to fahrenheit
		function kelvToFahr(val) { return celcToFahr(kelvToCelc(val)); }
		
		// converts fahrenheits to kelvins
		function fahrToKelv(val) { return celcToKelv(fahrToCelc(val)); }
		
		/*
		 * Calculates temperature and appends the specified unit.
		 * @api public
		 * @param val - number, input
		 * @param unit - string, desired unit
		 * @param prec - number, number of decimal places		 
		 *
		 */		
		function filter(val, unit, prec) {
			
			// normalizes val to be number
			// +val converts string to number, e.g. '123' to 123, but '123aa' to 'NaN' (in opposition to parseFloat)
			var value = typeof val === "number" ? val: +val,
				deg = " &deg;",
				result;
			
			// if 'NaN' or '' is passed, then return input value
			if (!isFinite(value) || val === "") {
				return val;
			}
			
			// if second param is number, it is assumed to be prec not unit
			prec = typeof unit === "number" ? unit: prec;
			
			// if prec is undefined, assign default value 1
			prec = typeof prec === "undefined" ? 1: prec;
			
			// set maximum for decimal places
			if (prec > 10) {
				prec = 10;
			}
			
			if (unit === "C-to-K") {
				result = celcToKelv(value).toFixed(prec) + " K";
			} else if (unit === "K-to-C") {
				result = kelvToCelc(value).toFixed(prec) + deg + "C";
			} else if (unit === "F-to-C") {
				result = fahrToCelc(value).toFixed(prec) + deg + "C";
			} else if (unit === "C-to-F") {
				result = celcToFahr(value).toFixed(prec) + deg + "F";
			} else if (unit === "K-to-F") {
				result = kelvToFahr(value).toFixed(prec) + deg + "F";
			} else if (unit === "F-to-K") {
				result = fahrToKelv(value).toFixed(prec) + " K";
			} else if (unit === "C") {
				result = value.toFixed(prec) + deg + "C";
			} else if (unit === "F") {
				result = value.toFixed(prec) + deg + "F";
			} else {
				result = value.toFixed(prec) + " K";
			}			
			return result;
		}
		
		return filter;			
	}
})();