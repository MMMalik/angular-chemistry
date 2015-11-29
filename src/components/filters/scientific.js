(function () {
	"use strict";
	angular.module("mmAngularChemistry")
		.filter("scientific", Scientific);
		
	function Scientific() {
		/*
		 * Applies scientific notation to the input
		 * @api public
		 * @param val - string, input
		 * @param prec - number, number of places after dot
		 * @param symbol - string, symbol to be used between 10 and its power.
		 *
		 */		
		function filter(val, prec, symbol) {
			
			//converts number to string
			var value = typeof val === "string" ? val: val + "",				
				len = value.length,
				first, rest, result, strAsFloat, power, dotPosition;
				
			if (arguments.length === 2) {
				// if the second argument is string, then it is assumed to be symbol, not prec
				symbol = typeof prec === "string" ? prec: symbol;
			}
			if (value.match(/^[0\.]+$/) || !isFinite(value)) {
				// if value is any combination of dots and zeroes, return the value
				// if value is not a finite number, return the value
				return value;
			}
			if (prec > 10) {
				// sets upper cap for precision
				prec = 10;
			}
			
			function removeZeroes() {
				// removes all leading zeroes
				for (var i = 0; i < len; i += 1) {
					if (value.charAt(i) !== "0") {
						value = value.substr(i);
						break;
					}
				}
			}			
				
			function applyPrec(first, rest) {
				strAsFloat = parseFloat(first + "." + rest);
				return result = typeof prec === "number" ? strAsFloat.toFixed(prec) + "": strAsFloat + ""; 
			}
				
			function lesserThanOne() {
				power = 1;
				while (value.charAt(power + dotPosition) === "0") {
					power += 1;
				}
				first = value.charAt(power + dotPosition); // first char after the removal of leading zeroes	
				rest = value.substr(power + dotPosition + 1); // all the rest
				power *= -1; // inverse the sign since the val is lesser than 1
				return applyPrec(first, rest);
			}
			
			function greaterThanOne() {
				if (dotPosition < 0) {
					first = value.charAt(0);
					rest = value.substr(1);
					power = value.length - 1;
					return applyPrec(first, rest);
				} else {
					first = value.charAt(0);
					rest = value.replace(".", "").substr(1);
					power = dotPosition - 1;
					strAsFloat = parseFloat(first + "." + rest);
					return applyPrec(first, rest);
				}
			}
			
			removeZeroes();
			dotPosition = value.indexOf(".");
			
			if (dotPosition === 1) {
				if (value.charAt(0) > 0) {
					return applyPrec(value.charAt(0), value.substr(2));
				}
				result = lesserThanOne();
			} else if (dotPosition === 0) {
				result = lesserThanOne();
			} else {
				if (value.length === 1) {
					return applyPrec(value);
				} else if (value === "") {
					return "";
				}
				result = greaterThanOne();
			}
			
			if (typeof symbol === "string") {
				if (symbol.match(/^cross$/i)) {					
					return result + " &Cross; 10<sup>" + power + "</sup>";
				}
				if (symbol.match(/^dot$/i)) {					
					return result + " &centerdot; 10<sup>" + power + "</sup>";
				}
				return val;
			} 
			return result + " &centerdot; 10<sup>" + power + "</sup>";
		}
		
		return filter;			
	}
})();