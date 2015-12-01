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
				first, rest, result, strAsFloat, power, dotPosition, negative;
			
			if (value.match(/^[\-0\.]+$/) || !isFinite(value) || value.length === 0) {
				// if value is any combination of dots and zeroes, return the value
				// if value is not a finite number, return the value
				// if value is empty string
				return value;
			}
			if (value.charAt(0) === "-") {
				// if '-' sign is present, set the flag
				negative = true;
				// strip it
				value = value.substr(1);
			}
			if (arguments.length === 2) {
				// if the second argument is string, then it is assumed to be symbol, not prec
				symbol = typeof prec === "string" ? prec: symbol;
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
				// applies the supplied precision (decimal places)
				strAsFloat = parseFloat(first + "." + rest);
				if (negative) {
					return typeof prec === "number" ? "-" + strAsFloat.toFixed(prec): "-" + strAsFloat;
				} else {
					return typeof prec === "number" ? "" + strAsFloat.toFixed(prec): "" + strAsFloat;
				}				
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
			
			function greaterThanTen() {
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
				// for numbers like 0.001 or 1.234
				if (value.charAt(0) > 0) {
					// if the leading digit is greater than 0
					return applyPrec(value.charAt(0), value.substr(2));
				} 
				// if the leading digit is 0, i.e. number is lesser than 1
				result = lesserThanOne();
			} else if (dotPosition === 0) {
				// for the notation with the leading dot, like .234 or .009
				result = lesserThanOne();
			} else {
				if (value.length === 1) {
					// if there is no dot and the value is a single digit
					return applyPrec(value);
				}
				// otherwise, the value is greater than 10
				result = greaterThanTen();
			}
			
			if (typeof symbol === "string") {
				if (symbol.match(/^cross$/i)) {			
					result = result + " &times; 10<sup>" + power + "</sup>";
				} else if (symbol.match(/^dot$/i)) {					
					result = result + " &centerdot; 10<sup>" + power + "</sup>";
				}
			} else {
				result = result + " &centerdot; 10<sup>" + power + "</sup>";
			}
			return result;
		}
		
		return filter;			
	}
})();