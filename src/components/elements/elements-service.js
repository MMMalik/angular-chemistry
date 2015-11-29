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