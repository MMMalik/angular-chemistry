(function () {
	"use strict";
	angular.module("mmAngularChemistry", ["ngSanitize"]);
})();
(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.factory("ChemElements", ChemElements);
		
	ChemElements.$inject = ["$http"];
		
	function ChemElements($http) {		
		var elements = {
			"H": {
				"symbol": "H",
				"name": "Hydrogen",
				"weight": 1.008
			},
			"He": {
				"symbol": "He",
				"name": "Helium",
				"weight": 4.002602
			},
			"Li": {
				"symbol": "Li",
				"name": "Lithium",
				"weight": 6.94
			},
			"Be": {
				"symbol": "Be",
				"name": "Beryllium",
				"weight": 9.0121832
			},
			"B": {
				"symbol": "B",
				"name": "Boron",
				"weight": 10.81
			},
			"C": {
				"symbol": "C",
				"name": "Carbon",
				"weight": 12.011
			},
			"N": {
				"symbol": "N",
				"name": "Nitrogen",
				"weight": 14.007
			},
			"O": {
				"symbol": "O",
				"name": "Oxygen",
				"weight": 15.999
			},
			"F": {
				"symbol": "F",
				"name": "Fluorine",
				"weight": 18.998403164
			},
			"Ne": {
				"symbol": "Ne",
				"name": "Neon",
				"weight": 20.1798
			},
			"Na": {
				"symbol": "Na",
				"name": "Sodium",
				"weight": 22.98976928
			},
			"Mg": {
				"symbol": "Mg",
				"name": "Magnesium",
				"weight": 24.305
			},
			"Al": {
				"symbol": "Al",
				"name": "Aluminium",
				"weight": 26.9815386
			},
			"Si": {
				"symbol": "Si",
				"name": "Silicon",
				"weight": 28.085
			},
			"P": {
				"symbol": "P",
				"name": "Phosphorus",
				"weight": 30.973761999
			},
			"S": {
				"symbol": "S",
				"name": "Sulfur",
				"weight": 32.06
			},
			"Cl": {
				"symbol": "Cl",
				"name": "Chlorine",
				"weight": 35.45
			},
			"Ar": {
				"symbol": "Ar",
				"name": "Argon",
				"weight": 39.948
			},
			"K": {
				"symbol": "K",
				"name": "Potassium",
				"weight": 39.0983
			},
			"Ca": {
				"symbol": "Ca",
				"name": "Calcium",
				"weight": 40.078
			},
			"Sc": {
				"symbol": "Sc",
				"name": "Scandium",
				"weight": 44.955909
			},
			"Ti": {
				"symbol": "Ti",
				"name": "Titanium",
				"weight": 47.867
			},
			"V": {
				"symbol": "V",
				"name": "Vanadium",
				"weight": 50.9415
			},
			"Cr": {
				"symbol": "Cr",
				"name": "Chromium",
				"weight": 51.9962
			},
			"Mn": {
				"symbol": "Mn",
				"name": "Manganese",
				"weight": 54.938044
			},
			"Fe": {
				"symbol": "Fe",
				"name": "Iron",
				"weight": 55.845
			},
			"Co": {
				"symbol": "Co",
				"name": "Cobalt",
				"weight": 58.933194
			},
			"Ni": {
				"symbol": "Ni",
				"name": "Nickel",
				"weight": 58.6934
			},
			"Cu": {
				"symbol": "Cu",
				"name": "Copper",
				"weight": 63.546
			},
			"Zn": {
				"symbol": "Zn",
				"name": "Zinc",
				"weight": 65.38
			},
			"Ga": {
				"symbol": "Ga",
				"name": "Gallium",
				"weight": 69.723
			},
			"Ge": {
				"symbol": "Ge",
				"name": "Germanium",
				"weight": 72.631
			},
			"As": {
				"symbol": "As",
				"name": "Arsenic",
				"weight": 74.921596
			},
			"Se": {
				"symbol": "Se",
				"name": "Selenium",
				"weight": 78.972
			},
			"Br": {
				"symbol": "Br",
				"name": "Bromine",
				"weight": 79.904
			},
			"Kr": {
				"symbol": "Kr",
				"name": "Krypton",
				"weight": 83.798
			},
			"Rb": {
				"symbol": "Rb",
				"name": "Rubidium",
				"weight": 85.4678
			},
			"Sr": {
				"symbol": "Sr",
				"name": "Strontium",
				"weight": 87.62
			},
			"Y": {
				"symbol": "Y",
				"name": "Yttrium",
				"weight": 88.90584
			},
			"Zr": {
				"symbol": "Zr",
				"name": "Zirconium",
				"weight": 91.224
			},
			"Nb": {
				"symbol": "Nb",
				"name": "Niobium",
				"weight": 92.90637
			},
			"Mo": {
				"symbol": "Mo",
				"name": "Molybdenum",
				"weight": 95.95
			},
			"Tc": {
				"symbol": "Tc",
				"name": "Technetium",
				"weight": 98
			},
			"Ru": {
				"symbol": "Ru",
				"name": "Ruthenium",
				"weight": 101.07
			},
			"Rh": {
				"symbol": "Rh",
				"name": "Rhodium",
				"weight": 102.9055
			},
			"Pd": {
				"symbol": "Pd",
				"name": "Palladium",
				"weight": 106.42
			},
			"Ag": {
				"symbol": "Ag",
				"name": "Silver",
				"weight": 107.8682
			},
			"Cd": {
				"symbol": "Cd",
				"name": "Cadmium",
				"weight": 112.414
			},
			"In": {
				"symbol": "In",
				"name": "Indium",
				"weight": 114.818
			},
			"Sn": {
				"symbol": "Sn",
				"name": "Tin",
				"weight": 118.711
			},
			"Sb": {
				"symbol": "Sb",
				"name": "Antimony",
				"weight": 121.76
			},
			"Te": {
				"symbol": "Te",
				"name": "Tellurium",
				"weight": 127.6
			},
			"I": {
				"symbol": "I",
				"name": "Iodine",
				"weight": 126.90447
			},
			"Xe": {
				"symbol": "Xe",
				"name": "Xenon",
				"weight": 131.294
			},
			"Cs": {
				"symbol": "Cs",
				"name": "Caesium",
				"weight": 132.90545197
			},
			"Ba": {
				"symbol": "Ba",
				"name": "Barium",
				"weight": 137.328
			},
			"La": {
				"symbol": "La",
				"name": "Lanthanum",
				"weight": 138.90548
			},
			"Ce": {
				"symbol": "Ce",
				"name": "Cerium",
				"weight": 140.116
			},
			"Pr": {
				"symbol": "Pr",
				"name": "Praseodymium",
				"weight": 140.90766
			},
			"Nd": {
				"symbol": "Nd",
				"name": "Neodymium",
				"weight": 144.242
			},
			"Pm": {
				"symbol": "Pm",
				"name": "Promethium",
				"weight": 145
			},
			"Sm": {
				"symbol": "Sm",
				"name": "Samarium",
				"weight": 150.36
			},
			"Eu": {
				"symbol": "Eu",
				"name": "Europium",
				"weight": 151.964
			},
			"Gd": {
				"symbol": "Gd",
				"name": "Gadolinium",
				"weight": 157.25
			},
			"Tb": {
				"symbol": "Tb",
				"name": "Terbium",
				"weight": 158.92535
			},
			"Dy": {
				"symbol": "Dy",
				"name": "Dysprosium",
				"weight": 162.5
			},
			"Ho": {
				"symbol": "Ho",
				"name": "Holmium",
				"weight": 164.93033
			},
			"Er": {
				"symbol": "Er",
				"name": "Erbium",
				"weight": 167.259
			},
			"Tm": {
				"symbol": "Tm",
				"name": "Thulium",
				"weight": 168.93422
			},
			"Yb": {
				"symbol": "Yb",
				"name": "Ytterbium",
				"weight": 173.046
			},
			"Lu": {
				"symbol": "Lu",
				"name": "Lutetium",
				"weight": 174.9668
			},
			"Hf": {
				"symbol": "Hf",
				"name": "Hafnium",
				"weight": 178.49
			},
			"Ta": {
				"symbol": "Ta",
				"name": "Tantalum",
				"weight": 180.94788
			},
			"W": {
				"symbol": "W",
				"name": "Tungsten",
				"weight": 183.84
			},
			"Re": {
				"symbol": "Re",
				"name": "Rhenium",
				"weight": 186.207
			},
			"Os": {
				"symbol": "Os",
				"name": "Osmium",
				"weight": 190.23
			},
			"Ir": {
				"symbol": "Ir",
				"name": "Iridium",
				"weight": 192.217
			},
			"Pt": {
				"symbol": "Pt",
				"name": "Platinum",
				"weight": 195.085
			},
			"Au": {
				"symbol": "Au",
				"name": "Gold",
				"weight": 196.966561
			},
			"Hg": {
				"symbol": "Hg",
				"name": "Mercury",
				"weight": 200.592
			},
			"Tl": {
				"symbol": "Tl",
				"name": "Thallium",
				"weight": 204.38
			},
			"Pb": {
				"symbol": "Pb",
				"name": "Lead",
				"weight": 207.2
			},
			"Bi": {
				"symbol": "Bi",
				"name": "Bismuth",
				"weight": 208.9804
			},
			"Po": {
				"symbol": "Po",
				"name": "Polonium",
				"weight": 209
			},
			"At": {
				"symbol": "At",
				"name": "Astatine",
				"weight": 210
			},
			"Rn": {
				"symbol": "Rn",
				"name": "Radon",
				"weight": 222
			},
			"Fr": {
				"symbol": "Fr",
				"name": "Francium",
				"weight": 223
			},
			"Ra": {
				"symbol": "Ra",
				"name": "Radium",
				"weight": 226
			},
			"Ac": {
				"symbol": "Ac",
				"name": "Actinium",
				"weight": 227
			},
			"Th": {
				"symbol": "Th",
				"name": "Thorium",
				"weight": 232.0377
			},
			"Pa": {
				"symbol": "Pa",
				"name": "Protactinium",
				"weight": 231.03588
			},
			"U": {
				"symbol": "U",
				"name": "Uranium",
				"weight": 238.02891
			},
			"Np": {
				"symbol": "Np",
				"name": "Neptunium",
				"weight": 237
			},
			"Pu": {
				"symbol": "Pu",
				"name": "Plutonium",
				"weight": 244
			},
			"Am": {
				"symbol": "Am",
				"name": "Americium",
				"weight": 243
			},
			"Cm": {
				"symbol": "Cm",
				"name": "Curium",
				"weight": 247
			},
			"Bk": {
				"symbol": "Bk",
				"name": "Berkelium",
				"weight": 247
			},
			"Cf": {
				"symbol": "Cf",
				"name": "Californium",
				"weight": 251
			},
			"Es": {
				"symbol": "Es",
				"name": "Einsteinium",
				"weight": 252
			},
			"Fm": {
				"symbol": "Fm",
				"name": "Fermium",
				"weight": 257
			},
			"Md": {
				"symbol": "Md",
				"name": "Mendelevium",
				"weight": 258
			},
			"No": {
				"symbol": "No",
				"name": "Nobelium",
				"weight": 259
			},
			"Lr": {
				"symbol": "Lr",
				"name": "Lawrencium",
				"weight": 266
			},
			"Rf": {
				"symbol": "Rf",
				"name": "Rutherfordium",
				"weight": 267
			},
			"Db": {
				"symbol": "Db",
				"name": "Dubnium",
				"weight": 268
			},
			"Sg": {
				"symbol": "Sg",
				"name": "Seaborgium",
				"weight": 269
			},
			"Bh": {
				"symbol": "Bh",
				"name": "Bohrium",
				"weight": 270
			},
			"Hs": {
				"symbol": "Hs",
				"name": "Hassium",
				"weight": 269
			},
			"Mt": {
				"symbol": "Mt",
				"name": "Meitnerium",
				"weight": 278
			},
			"Ds": {
				"symbol": "Ds",
				"name": "Darmstadtium",
				"weight": 281
			},
			"Rg": {
				"symbol": "Rg",
				"name": "Roentgenium",
				"weight": 282
			},
			"Cn": {
				"symbol": "Cn",
				"name": "Copernicium",
				"weight": 285
			},
			"Uut": {
				"symbol": "Uut",
				"name": "Ununtrium",
				"weight": 286
			},
			"Fl": {
				"symbol": "Fl",
				"name": "Flerovium",
				"weight": 289
			},
			"Uup": {
				"symbol": "Uup",
				"name": "Ununpentium",
				"weight": 289
			},
			"Lv": {
				"symbol": "Lv",
				"name": "Livermorium",
				"weight": 293
			},
			"Uus": {
				"symbol": "Uus",
				"name": "Ununseptium",
				"weight": 294
			},
			"Uuo": {
				"symbol": "Uuo",
				"name": "Ununoctium",
				"weight": 294
			}
		};
		
		var service = {};
		
		/*
		 * Appends `elements` to the returned `service` object.
		 * @api private
		 * 
		 */
		function appendElements(elements) {
			angular.forEach(elements, function (value, key) {
				this[key] = value;
			}, service);
		}		
		
		appendElements(elements);
		
		/*
		 * Enables filtering of the elements.
		 * @api public
		 * 
		 */		
		service.filter = function (criteria, options) {			
			var results = {}, // accumulates results
				comparableNumbers = ["weight", "density", "meltingPoint", "boilingPoint"], // can be compared by using $gt and $lt
				comparableStrings = ["symbol", "name", "desc"], // can be compared by using regex
				predefined = {}; // accumulates predefined filtering functions
			
			// adds comparableNumbers to predefined functions
			comparableNumbers.forEach(function (property) {
				predefined[property] = function (element, options) {
					if (element[property] === null) {
						return false;
					}
					if (typeof options.$gt !== "undefined" && typeof options.$lt !== "undefined") {						
						return element[property] > options.$gt && element[property] < options.$lt;
					} else if (typeof options.$gt !== "undefined") {
						return element[property] > options.$gt;
					} else if (typeof options.$lt !== "undefined") {
						return element[property] < options.$lt;
					}
				}
			});
			
			// adds comparableStrings to predefined functions
			comparableStrings.forEach(function (property) {
				predefined[property] = function (element, options) {					
					if (typeof options.match !== "undefined") {						
						return !!element[property].match(options.match);
					}
				}
			});
			
			// if only one argument was specified, then it has to be a custom function
			// otherwise, one of the predefined functions is chosen
			criteria = (arguments.length === 1) ? criteria: predefined[criteria];
			
			// performs filtering
			angular.forEach(elements, function (element, key) {
				if (criteria(element, options) === true) {
					this[key] = element;
				}
			}, results);
			
			return results;
		};
		
		/*
		 * Gets an extended version of elements if present.
		 * @api public
		 * 
		 */
		service.extended = function (pathToElements) {
			$http.get(pathToElements).then(function (res) {
				elements = res.data;
				appendElements(elements);
			}, function (err) {});			
		}
		
		/*
		 * Calculates molecular weight of the given formula.
		 * @api public
		 *
		 */
		service.calcWeight = function (formula) {
			var match = formula.match(/\d+|\_\(.*?\)|\^\(.*?\)|\^\d*[\-\+]|[A-Za-z][a-z]*/g),
				errMessage = { unknown: [] }, result = 0,
				content, element, mass, lastEl;
			match.forEach(function (el) {				
				element = elements[el];
				if (typeof element !== "undefined") {
					mass = element.weight;
					result += mass * 1;
				} else if (isFinite(el)) {
					if (typeof mass === "undefined") {
						errMessage.unknown.push(lastEl);
					}
					result -= mass;
					result += mass * el;
				} else if (el.substr(0, 2) === "_(") {
					content = el.substr(2, el.length - 3);
					if (typeof mass === "undefined") {
						errMessage.unknown.push(lastEl);
					}
					if (!isFinite(content)) {
						errMessage.unknown.push(content);
					}
					result -= mass;
					result += mass * content;
				} else if (el.substr(0, 2) !== "_^" && el.substr(0, 1) !== "^") {
					errMessage.unknown.push(el);
				}
				lastEl = element;
			});			
			return { result: result, unknown: errMessage.unknown };
		}
		
		return service;
	}
})();
(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.directive("chemEntity", chemEntity)
		
	chemEntity.$inject = ["ChemUtils"];
		
	function chemEntity(ChemUtils) {
		return {
			restrict: "AE",
			template: "<span ng-bind-html='parsedFormula'></span>",
			scope: {
				chemFormula: "@",
				chemAsIs: "@",
				chemSub: "@",
				chemSup: "@"
			},
			link: function ($scope, $element, $attrs) {
				function update() {
					if ($scope.chemAsIs === "true") {
						$scope.parsedFormula = $scope.chemFormula;						
					} else {
						$scope.parsedFormula = ChemUtils.parseFormula($scope.chemFormula, { sub: $scope.chemSub, sup: $scope.chemSup } );
					}
				}
				$scope.$watchGroup(["chemFormula", "chemAsIs", "chemSub", "chemSup"], update);				
			}
		};
	}
})();
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
					result = result + " &Cross; 10<sup>" + power + "</sup>";
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


(function () {
	"use strict"
	angular.module("mmAngularChemistry")
		.directive("chemScheme", chemScheme);
	
	chemScheme.$inject = ["$compile"];
	
	function chemScheme($compile) {
		return {
			restrict: "AE",
			template: "<span ng-repeat='subst in chemSubst'>" +
						"<chem-entity chem-formula='{{subst}}'></chem-entity>" +
						"<span ng-if='!$last'> &plus; </span>" +
					  "</span>" +
					  "<span ng-bind-html='arrow'></span>" +
					  "<span ng-repeat='prod in chemProd'>" +
						"<chem-entity chem-formula='{{prod}}'></chem-entity>" +
						"<span ng-if='!$last'> &plus; </span>" +
					  "</span>",
			scope: {
				chemArrow: "@",
				chemProd: "=",
				chemSubst: "="
			},
			link: function (scope, element) {
				scope.arrow = " &" + scope.chemArrow + "; ";
			}
		};
	}
})();
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