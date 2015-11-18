describe("ChemElements", function () {
	
	var elements = {
			"H": {
				"symbol": "H",
				"name": "Hydrogen",
				"desc": "diatomic nonmetal",
				"weight": "1.008",
				"density": "0.00008988",
				"meltingPoint": "14.01",
				"boilingPoint": "20.28"
			},
			"He": {
				"symbol": "He",
				"name": "Helium",
				"desc": "noble gas",
				"weight": "4.002602",
				"density": "0.0001785",
				"meltingPoint": "0.95",
				"boilingPoint": "4.22"
			},
			"Li": {
				"symbol": "Li",
				"name": "Lithium",
				"desc": "alkali metal",
				"weight": "6.94",
				"density": "0.534",
				"meltingPoint": "453.69",
				"boilingPoint": "1560"
			},
			"Be": {
				"symbol": "Be",
				"name": "Beryllium",
				"desc": "alkaline earth metal",
				"weight": "9.0121832",
				"density": "1.85",
				"meltingPoint": "1560",
				"boilingPoint": "2742"
			},
			"B": {
				"symbol": "B",
				"name": "Boron",
				"desc": "metalloid",
				"weight": "10.81",
				"density": "2.34",
				"meltingPoint": "2349",
				"boilingPoint": "4200"
			},
			"C": {
				"symbol": "C",
				"name": "Carbon",
				"desc": "polyatomic nonmetal",
				"weight": "12.011",
				"density": "2.267",
				"meltingPoint": "3800",
				"boilingPoint": "4300"
			},
			"N": {
				"symbol": "N",
				"name": "Nitrogen",
				"desc": "diatomic nonmetal",
				"weight": "14.007",
				"density": "0.0012506",
				"meltingPoint": "63.15",
				"boilingPoint": "77.36"
			},
			"O": {
				"symbol": "O",
				"name": "Oxygen",
				"desc": "diatomic nonmetal",
				"weight": "15.999",
				"density": "0.001429",
				"meltingPoint": "54.36",
				"boilingPoint": "90.20"
			},
			"F": {
				"symbol": "F",
				"name": "Fluorine",
				"desc": "diatomic nonmetal",
				"weight": "18.998403164",
				"density": "0.001696",
				"meltingPoint": "53.53",
				"boilingPoint": "85.03"
			},
			"Ne": {
				"symbol": "Ne",
				"name": "Neon",
				"desc": "noble gas",
				"weight": "20.1798",
				"density": "0.0008999",
				"meltingPoint": "24.56",
				"boilingPoint": "27.07"
			},
			"Na": {
				"symbol": "Na",
				"name": "Sodium",
				"desc": "alkali metal",
				"weight": "22.98976928",
				"density": "0.971",
				"meltingPoint": "370.87",
				"boilingPoint": "1156"
			},
			"Mg": {
				"symbol": "Mg",
				"name": "Magnesium",
				"desc": "alkaline earth metal",
				"weight": "24.305",
				"density": "1.738",
				"meltingPoint": "923",
				"boilingPoint": "1363"
			},
			"Al": {
				"symbol": "Al",
				"name": "Aluminium",
				"desc": "post-transition metal",
				"weight": "26.9815386",
				"density": "2.698",
				"meltingPoint": "933.47",
				"boilingPoint": "2792"
			},
			"Si": {
				"symbol": "Si",
				"name": "Silicon",
				"desc": "metalloid",
				"weight": "28.085",
				"density": "2.3296",
				"meltingPoint": "1687",
				"boilingPoint": "3538"
			},
			"P": {
				"symbol": "P",
				"name": "Phosphorus",
				"desc": "polyatomic nonmetal",
				"weight": "30.973761999",
				"density": "1.82",
				"meltingPoint": "317.30",
				"boilingPoint": "550"
			},
			"S": {
				"symbol": "S",
				"name": "Sulfur",
				"desc": "polyatomic nonmetal",
				"weight": "32.06",
				"density": "2.067",
				"meltingPoint": "388.36",
				"boilingPoint": "717.87"
			},
			"Cl": {
				"symbol": "Cl",
				"name": "Chlorine",
				"desc": "diatomic nonmetal",
				"weight": "35.45",
				"density": "0.003214",
				"meltingPoint": "171.6",
				"boilingPoint": "239.11"
			},
			"Ar": {
				"symbol": "Ar",
				"name": "Argon",
				"desc": "noble gas",
				"weight": "39.948",
				"density": "0.0017837",
				"meltingPoint": "83.80",
				"boilingPoint": "87.30"
			},
			"K": {
				"symbol": "K",
				"name": "Potassium",
				"desc": "alkali metal",
				"weight": "39.0983",
				"density": "0.862",
				"meltingPoint": "336.53",
				"boilingPoint": "1032"
			},
			"Ca": {
				"symbol": "Ca",
				"name": "Calcium",
				"desc": "alkaline earth metal",
				"weight": "40.078",
				"density": "1.54",
				"meltingPoint": "1115",
				"boilingPoint": "1757"
			},
			"Sc": {
				"symbol": "Sc",
				"name": "Scandium",
				"desc": "transition metal",
				"weight": "44.955909",
				"density": "2.989",
				"meltingPoint": "1814",
				"boilingPoint": "3109"
			},
			"Ti": {
				"symbol": "Ti",
				"name": "Titanium",
				"desc": "transition metal",
				"weight": "47.867",
				"density": "4.54",
				"meltingPoint": "1941",
				"boilingPoint": "3560"
			},
			"V": {
				"symbol": "V",
				"name": "Vanadium",
				"desc": "transition metal",
				"weight": "50.9415",
				"density": "6.11",
				"meltingPoint": "2183",
				"boilingPoint": "3680"
			},
			"Cr": {
				"symbol": "Cr",
				"name": "Chromium",
				"desc": "transition metal",
				"weight": "51.9962",
				"density": "7.15",
				"meltingPoint": "2180",
				"boilingPoint": "2944"
			},
			"Mn": {
				"symbol": "Mn",
				"name": "Manganese",
				"desc": "transition metal",
				"weight": "54.938044",
				"density": "7.44",
				"meltingPoint": "1519",
				"boilingPoint": "2334"
			},
			"Fe": {
				"symbol": "Fe",
				"name": "Iron",
				"desc": "transition metal",
				"weight": "55.845",
				"density": "7.874",
				"meltingPoint": "1811",
				"boilingPoint": "3134"
			},
			"Co": {
				"symbol": "Co",
				"name": "Cobalt",
				"desc": "transition metal",
				"weight": "58.933194",
				"density": "8.86",
				"meltingPoint": "1768",
				"boilingPoint": "3200"
			},
			"Ni": {
				"symbol": "Ni",
				"name": "Nickel",
				"desc": "transition metal",
				"weight": "58.6934",
				"density": "8.912",
				"meltingPoint": "1728",
				"boilingPoint": "3186"
			},
			"Cu": {
				"symbol": "Cu",
				"name": "Copper",
				"desc": "transition metal",
				"weight": "63.546",
				"density": "8.96",
				"meltingPoint": "1357.77",
				"boilingPoint": "2835"
			},
			"Zn": {
				"symbol": "Zn",
				"name": "Zinc",
				"desc": "transition metal",
				"weight": "65.38",
				"density": "7.134",
				"meltingPoint": "692.88",
				"boilingPoint": "1180"
			},
			"Ga": {
				"symbol": "Ga",
				"name": "Gallium",
				"desc": "post-transition metal",
				"weight": "69.723",
				"density": "5.907",
				"meltingPoint": "302.9146",
				"boilingPoint": "2477"
			},
			"Ge": {
				"symbol": "Ge",
				"name": "Germanium",
				"desc": "metalloid",
				"weight": "72.631",
				"density": "5.323",
				"meltingPoint": "1211.40",
				"boilingPoint": "3106"
			},
			"As": {
				"symbol": "As",
				"name": "Arsenic",
				"desc": "metalloid",
				"weight": "74.921596",
				"density": "5.776",
				"meltingPoint": "1090",
				"boilingPoint": "887"
			},
			"Se": {
				"symbol": "Se",
				"name": "Selenium",
				"desc": "polyatomic nonmetal",
				"weight": "78.972",
				"density": "4.809",
				"meltingPoint": "453",
				"boilingPoint": "958"
			},
			"Br": {
				"symbol": "Br",
				"name": "Bromine",
				"desc": "diatomic nonmetal",
				"weight": "79.904",
				"density": "3.122",
				"meltingPoint": "265.8",
				"boilingPoint": "332.0"
			},
			"Kr": {
				"symbol": "Kr",
				"name": "Krypton",
				"desc": "noble gas",
				"weight": "83.798",
				"density": "0.003733",
				"meltingPoint": "115.79",
				"boilingPoint": "119.93"
			},
			"Rb": {
				"symbol": "Rb",
				"name": "Rubidium",
				"desc": "alkali metal",
				"weight": "85.4678",
				"density": "1.532",
				"meltingPoint": "312.46",
				"boilingPoint": "961"
			},
			"Sr": {
				"symbol": "Sr",
				"name": "Strontium",
				"desc": "alkaline earth metal",
				"weight": "87.62",
				"density": "2.64",
				"meltingPoint": "1050",
				"boilingPoint": "1655"
			},
			"Y": {
				"symbol": "Y",
				"name": "Yttrium",
				"desc": "transition metal",
				"weight": "88.90584",
				"density": "4.469",
				"meltingPoint": "1799",
				"boilingPoint": "3609"
			},
			"Zr": {
				"symbol": "Zr",
				"name": "Zirconium",
				"desc": "transition metal",
				"weight": "91.224",
				"density": "6.506",
				"meltingPoint": "2128",
				"boilingPoint": "4682"
			},
			"Nb": {
				"symbol": "Nb",
				"name": "Niobium",
				"desc": "transition metal",
				"weight": "92.90637",
				"density": "8.57",
				"meltingPoint": "2750",
				"boilingPoint": "5017"
			},
			"Mo": {
				"symbol": "Mo",
				"name": "Molybdenum",
				"desc": "transition metal",
				"weight": "95.95",
				"density": "10.22",
				"meltingPoint": "2896",
				"boilingPoint": "4912"
			},
			"Tc": {
				"symbol": "Tc",
				"name": "Technetium",
				"desc": "transition metal",
				"weight": "98",
				"density": "11.5",
				"meltingPoint": "2430",
				"boilingPoint": "4538"
			},
			"Ru": {
				"symbol": "Ru",
				"name": "Ruthenium",
				"desc": "transition metal",
				"weight": "101.07",
				"density": "12.37",
				"meltingPoint": "2607",
				"boilingPoint": "4423"
			},
			"Rh": {
				"symbol": "Rh",
				"name": "Rhodium",
				"desc": "transition metal",
				"weight": "102.90550",
				"density": "12.41",
				"meltingPoint": "2237",
				"boilingPoint": "3968"
			},
			"Pd": {
				"symbol": "Pd",
				"name": "Palladium",
				"desc": "transition metal",
				"weight": "106.42",
				"density": "12.02",
				"meltingPoint": "1828.05",
				"boilingPoint": "3236"
			},
			"Ag": {
				"symbol": "Ag",
				"name": "Silver",
				"desc": "transition metal",
				"weight": "107.8682",
				"density": "10.501",
				"meltingPoint": "1234.93",
				"boilingPoint": "2435"
			},
			"Cd": {
				"symbol": "Cd",
				"name": "Cadmium",
				"desc": "transition metal",
				"weight": "112.414",
				"density": "8.69",
				"meltingPoint": "594.22",
				"boilingPoint": "1040"
			},
			"In": {
				"symbol": "In",
				"name": "Indium",
				"desc": "post-transition metal",
				"weight": "114.818",
				"density": "7.31",
				"meltingPoint": "429.75",
				"boilingPoint": "2345"
			},
			"Sn": {
				"symbol": "Sn",
				"name": "Tin",
				"desc": "post-transition metal",
				"weight": "118.711",
				"density": "7.287",
				"meltingPoint": "505.08",
				"boilingPoint": "2875"
			},
			"Sb": {
				"symbol": "Sb",
				"name": "Antimony",
				"desc": "metalloid",
				"weight": "121.760",
				"density": "6.685",
				"meltingPoint": "903.78",
				"boilingPoint": "1860"
			},
			"Te": {
				"symbol": "Te",
				"name": "Tellurium",
				"desc": "metalloid",
				"weight": "127.60",
				"density": "6.232",
				"meltingPoint": "722.66",
				"boilingPoint": "1261"
			},
			"I": {
				"symbol": "I",
				"name": "Iodine",
				"desc": "diatomic nonmetal",
				"weight": "126.90447",
				"density": "4.93",
				"meltingPoint": "386.85",
				"boilingPoint": "457.4"
			},
			"Xe": {
				"symbol": "Xe",
				"name": "Xenon",
				"desc": "noble gas",
				"weight": "131.294",
				"density": "0.005887",
				"meltingPoint": "161.4",
				"boilingPoint": "165.03"
			},
			"Cs": {
				"symbol": "Cs",
				"name": "Caesium",
				"desc": "alkali metal",
				"weight": "132.90545197",
				"density": "1.873",
				"meltingPoint": "301.59",
				"boilingPoint": "944"
			},
			"Ba": {
				"symbol": "Ba",
				"name": "Barium",
				"desc": "alkaline earth metal",
				"weight": "137.328",
				"density": "3.594",
				"meltingPoint": "1000",
				"boilingPoint": "2170"
			},
			"La": {
				"symbol": "La",
				"name": "Lanthanum",
				"desc": "lanthanide",
				"weight": "138.90548",
				"density": "6.145",
				"meltingPoint": "1193",
				"boilingPoint": "3737"
			},
			"Ce": {
				"symbol": "Ce",
				"name": "Cerium",
				"desc": "lanthanide",
				"weight": "140.116",
				"density": "6.77",
				"meltingPoint": "1068",
				"boilingPoint": "3716"
			},
			"Pr": {
				"symbol": "Pr",
				"name": "Praseodymium",
				"desc": "lanthanide",
				"weight": "140.90766",
				"density": "6.773",
				"meltingPoint": "1208",
				"boilingPoint": "3793"
			},
			"Nd": {
				"symbol": "Nd",
				"name": "Neodymium",
				"desc": "lanthanide",
				"weight": "144.242",
				"density": "7.007",
				"meltingPoint": "1297",
				"boilingPoint": "3347"
			},
			"Pm": {
				"symbol": "Pm",
				"name": "Promethium",
				"desc": "lanthanide",
				"weight": "145",
				"density": "7.26",
				"meltingPoint": "1315",
				"boilingPoint": "3273"
			},
			"Sm": {
				"symbol": "Sm",
				"name": "Samarium",
				"desc": "lanthanide",
				"weight": "150.36",
				"density": "7.52",
				"meltingPoint": "1345",
				"boilingPoint": "2067"
			},
			"Eu": {
				"symbol": "Eu",
				"name": "Europium",
				"desc": "lanthanide",
				"weight": "151.964",
				"density": "5.243",
				"meltingPoint": "1099",
				"boilingPoint": "1802"
			},
			"Gd": {
				"symbol": "Gd",
				"name": "Gadolinium",
				"desc": "lanthanide",
				"weight": "157.25",
				"density": "7.895",
				"meltingPoint": "1585",
				"boilingPoint": "3546"
			},
			"Tb": {
				"symbol": "Tb",
				"name": "Terbium",
				"desc": "lanthanide",
				"weight": "158.92535",
				"density": "8.229",
				"meltingPoint": "1629",
				"boilingPoint": "3503"
			},
			"Dy": {
				"symbol": "Dy",
				"name": "Dysprosium",
				"desc": "lanthanide",
				"weight": "162.500",
				"density": "8.55",
				"meltingPoint": "1680",
				"boilingPoint": "2840"
			},
			"Ho": {
				"symbol": "Ho",
				"name": "Holmium",
				"desc": "lanthanide",
				"weight": "164.93033",
				"density": "8.795",
				"meltingPoint": "1734",
				"boilingPoint": "2993"
			},
			"Er": {
				"symbol": "Er",
				"name": "Erbium",
				"desc": "lanthanide",
				"weight": "167.259",
				"density": "9.066",
				"meltingPoint": "1802",
				"boilingPoint": "3141"
			},
			"Tm": {
				"symbol": "Tm",
				"name": "Thulium",
				"desc": "lanthanide",
				"weight": "168.93422",
				"density": "9.321",
				"meltingPoint": "1818",
				"boilingPoint": "2223"
			},
			"Yb": {
				"symbol": "Yb",
				"name": "Ytterbium",
				"desc": "lanthanide",
				"weight": "173.046",
				"density": "6.965",
				"meltingPoint": "1097",
				"boilingPoint": "1469"
			},
			"Lu": {
				"symbol": "Lu",
				"name": "Lutetium",
				"desc": "lanthanide",
				"weight": "174.9668",
				"density": "9.84",
				"meltingPoint": "1925",
				"boilingPoint": "3675"
			},
			"Hf": {
				"symbol": "Hf",
				"name": "Hafnium",
				"desc": "transition metal",
				"weight": "178.49",
				"density": "13.31",
				"meltingPoint": "2506",
				"boilingPoint": "4876"
			},
			"Ta": {
				"symbol": "Ta",
				"name": "Tantalum",
				"desc": "transition metal",
				"weight": "180.94788",
				"density": "16.654",
				"meltingPoint": "3290",
				"boilingPoint": "5731"
			},
			"W": {
				"symbol": "W",
				"name": "Tungsten",
				"desc": "transition metal",
				"weight": "183.84",
				"density": "19.25",
				"meltingPoint": "3695",
				"boilingPoint": "5828"
			},
			"Re": {
				"symbol": "Re",
				"name": "Rhenium",
				"desc": "transition metal",
				"weight": "186.207",
				"density": "21.02",
				"meltingPoint": "3459",
				"boilingPoint": "5869"
			},
			"Os": {
				"symbol": "Os",
				"name": "Osmium",
				"desc": "transition metal",
				"weight": "190.23",
				"density": "22.61",
				"meltingPoint": "3306",
				"boilingPoint": "5285"
			},
			"Ir": {
				"symbol": "Ir",
				"name": "Iridium",
				"desc": "transition metal",
				"weight": "192.217",
				"density": "22.56",
				"meltingPoint": "2719",
				"boilingPoint": "4701"
			},
			"Pt": {
				"symbol": "Pt",
				"name": "Platinum",
				"desc": "transition metal",
				"weight": "195.085",
				"density": "21.46",
				"meltingPoint": "2041.4",
				"boilingPoint": "4098"
			},
			"Au": {
				"symbol": "Au",
				"name": "Gold",
				"desc": "transition metal",
				"weight": "196.9665610",
				"density": "19.282",
				"meltingPoint": "1337.33",
				"boilingPoint": "3129"
			},
			"Hg": {
				"symbol": "Hg",
				"name": "Mercury",
				"desc": "transition metal",
				"weight": "200.592",
				"density": "13.5336",
				"meltingPoint": "234.43",
				"boilingPoint": "629.88"
			},
			"Tl": {
				"symbol": "Tl",
				"name": "Thallium",
				"desc": "post-transition metal",
				"weight": "204.38",
				"density": "11.85",
				"meltingPoint": "577",
				"boilingPoint": "1746"
			},
			"Pb": {
				"symbol": "Pb",
				"name": "Lead",
				"desc": "post-transition metal",
				"weight": "207.2",
				"density": "11.342",
				"meltingPoint": "600.61",
				"boilingPoint": "2022"
			},
			"Bi": {
				"symbol": "Bi",
				"name": "Bismuth",
				"desc": "post-transition metal",
				"weight": "208.98040",
				"density": "9.807",
				"meltingPoint": "544.7",
				"boilingPoint": "1837"
			},
			"Po": {
				"symbol": "Po",
				"name": "Polonium",
				"desc": "post-transition metal",
				"weight": "209",
				"density": "9.32",
				"meltingPoint": "527",
				"boilingPoint": "1235"
			},
			"At": {
				"symbol": "At",
				"name": "Astatine",
				"desc": "metalloid",
				"weight": "210",
				"density": "7",
				"meltingPoint": "575",
				"boilingPoint": "610"
			},
			"Rn": {
				"symbol": "Rn",
				"name": "Radon",
				"desc": "noble gas",
				"weight": "222",
				"density": "0.00973",
				"meltingPoint": "202",
				"boilingPoint": "211.3"
			},
			"Fr": {
				"symbol": "Fr",
				"name": "Francium",
				"desc": "alkali metal",
				"weight": "223",
				"density": "1.87",
				"meltingPoint": "300",
				"boilingPoint": "950"
			},
			"Ra": {
				"symbol": "Ra",
				"name": "Radium",
				"desc": "alkaline earth metal",
				"weight": "226",
				"density": "5.5",
				"meltingPoint": "973",
				"boilingPoint": "2010"
			},
			"Ac": {
				"symbol": "Ac",
				"name": "Actinium",
				"desc": "actinide",
				"weight": "227",
				"density": "10.07",
				"meltingPoint": "1323",
				"boilingPoint": "3471"
			},
			"Th": {
				"symbol": "Th",
				"name": "Thorium",
				"desc": "actinide",
				"weight": "232.0377",
				"density": "11.72",
				"meltingPoint": "2115",
				"boilingPoint": "5061"
			},
			"Pa": {
				"symbol": "Pa",
				"name": "Protactinium",
				"desc": "actinide",
				"weight": "231.03588",
				"density": "15.37",
				"meltingPoint": "1841",
				"boilingPoint": "4300"
			},
			"U": {
				"symbol": "U",
				"name": "Uranium",
				"desc": "actinide",
				"weight": "238.02891",
				"density": "18.95",
				"meltingPoint": "1405.3",
				"boilingPoint": "4404"
			},
			"Np": {
				"symbol": "Np",
				"name": "Neptunium",
				"desc": "actinide",
				"weight": "237",
				"density": "20.45",
				"meltingPoint": "917",
				"boilingPoint": "4273"
			},
			"Pu": {
				"symbol": "Pu",
				"name": "Plutonium",
				"desc": "actinide",
				"weight": "244",
				"density": "19.84",
				"meltingPoint": "912.5",
				"boilingPoint": "3501"
			},
			"Am": {
				"symbol": "Am",
				"name": "Americium",
				"desc": "actinide",
				"weight": "243",
				"density": "13.69",
				"meltingPoint": "1449",
				"boilingPoint": "2880"
			},
			"Cm": {
				"symbol": "Cm",
				"name": "Curium",
				"desc": "actinide",
				"weight": "247",
				"density": "13.51",
				"meltingPoint": "1613",
				"boilingPoint": "3383"
			},
			"Bk": {
				"symbol": "Bk",
				"name": "Berkelium",
				"desc": "actinide",
				"weight": "247",
				"density": "14.79",
				"meltingPoint": "1259",
				"boilingPoint": "2900"
			},
			"Cf": {
				"symbol": "Cf",
				"name": "Californium",
				"desc": "actinide",
				"weight": "251",
				"density": "15.1",
				"meltingPoint": "1173",
				"boilingPoint": "1743"
			},
			"Es": {
				"symbol": "Es",
				"name": "Einsteinium",
				"desc": "actinide",
				"weight": "252",
				"density": "8.84",
				"meltingPoint": "1133",
				"boilingPoint": "1269"
			},
			"Fm": {
				"symbol": "Fm",
				"name": "Fermium",
				"desc": "actinide",
				"weight": "257",
				"density": "unknown",
				"meltingPoint": "1125",
				"boilingPoint": "unknown"
			},
			"Md": {
				"symbol": "Md",
				"name": "Mendelevium",
				"desc": "actinide",
				"weight": "258",
				"density": "unknown",
				"meltingPoint": "1100",
				"boilingPoint": "unknown"
			},
			"No": {
				"symbol": "No",
				"name": "Nobelium",
				"desc": "actinide",
				"weight": "259",
				"density": "unknown",
				"meltingPoint": "1100",
				"boilingPoint": "unknown"
			},
			"Lr": {
				"symbol": "Lr",
				"name": "Lawrencium",
				"desc": "actinide",
				"weight": "266",
				"density": "unknown",
				"meltingPoint": "1900",
				"boilingPoint": "unknown"
			},
			"Rf": {
				"symbol": "Rf",
				"name": "Rutherfordium",
				"desc": "transition metal",
				"weight": "267",
				"density": "23.2",
				"meltingPoint": "2400",
				"boilingPoint": "5800"
			},
			"Db": {
				"symbol": "Db",
				"name": "Dubnium",
				"desc": "transition metal",
				"weight": "268",
				"density": "29.3",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Sg": {
				"symbol": "Sg",
				"name": "Seaborgium",
				"desc": "transition metal",
				"weight": "269",
				"density": "35.0",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Bh": {
				"symbol": "Bh",
				"name": "Bohrium",
				"desc": "transition metal",
				"weight": "270",
				"density": "37.1",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Hs": {
				"symbol": "Hs",
				"name": "Hassium",
				"desc": "transition metal",
				"weight": "269",
				"density": "40.7",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Mt": {
				"symbol": "Mt",
				"name": "Meitnerium",
				"desc": "unknown chemical properties",
				"weight": "278",
				"density": "37.4",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Ds": {
				"symbol": "Ds",
				"name": "Darmstadtium",
				"desc": "unknown chemical properties",
				"weight": "281",
				"density": "34.8",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Rg": {
				"symbol": "Rg",
				"name": "Roentgenium",
				"desc": "unknown chemical properties",
				"weight": "282",
				"density": "28.7",
				"meltingPoint": "unknown",
				"boilingPoint": "unknown"
			},
			"Cn": {
				"symbol": "Cn",
				"name": "Copernicium",
				"desc": "transition metal",
				"weight": "285",
				"density": "23.7",
				"meltingPoint": "unknown",
				"boilingPoint": "357"
			},
			"Uut": {
				"symbol": "Uut",
				"name": "Ununtrium",
				"desc": "unknown chemical properties",
				"weight": "286",
				"density": "16",
				"meltingPoint": "700",
				"boilingPoint": "1400"
			},
			"Fl": {
				"symbol": "Fl",
				"name": "Flerovium",
				"desc": "post-transition metal",
				"weight": "289",
				"density": "14",
				"meltingPoint": "340",
				"boilingPoint": "420"
			},
			"Uup": {
				"symbol": "Uup",
				"name": "Ununpentium",
				"desc": "unknown chemical properties",
				"weight": "289",
				"density": "13.5",
				"meltingPoint": "700",
				"boilingPoint": "1400"
			},
			"Lv": {
				"symbol": "Lv",
				"name": "Livermorium",
				"desc": "unknown chemical properties",
				"weight": "293",
				"density": "12.9",
				"meltingPoint": "708.5",
				"boilingPoint": "1085"
			},
			"Uus": {
				"symbol": "Uus",
				"name": "Ununseptium",
				"desc": "unknown chemical properties",
				"weight": "294",
				"density": "7.2",
				"meltingPoint": "673",
				"boilingPoint": "823"
			},
			"Uuo": {
				"symbol": "Uuo",
				"name": "Ununoctium",
				"desc": "unknown chemical properties",
				"weight": "294",
				"density": "5.0",
				"meltingPoint": "258",
				"boilingPoint": "263"
			}
	};
		
	beforeEach(module("chemistry"));
	
	var Elements;
	
	beforeEach(inject(function (_ChemElements_) {
		Elements = _ChemElements_;
	}));
	
	it("should contain all elements", function () {
		angular.forEach(elements, function (value, key) {
			expect(Elements[key]).toEqual(value);
		});
	});
	
	it("should process filtering according to built-in filtering functions", function () {
		var comparableNumbers = {
			"weight": { $gt: 10, $lt: 15 },
			"density": { $gt: 1, $lt: 5 },
			"meltingPoint": { $gt: 0, $lt: 5 },
			"boilingPoint": { $gt: 0.5, $lt: 500 }
		},
		filtered;
		angular.forEach(comparableNumbers, function (value, key) {
			filtered = Elements.filter(key, value);
			expect(Object.keys(filtered).length).toBeGreaterThan(0);
			filtered = Elements.filter(key, { $gt: value.$gt });
			expect(Object.keys(filtered).length).toBeGreaterThan(0);
			filtered = Elements.filter(key, { $lt: value.$lt });
			expect(Object.keys(filtered).length).toBeGreaterThan(0);
		});
		
		var comparableStrings = {
			"symbol": { match: /H/ },
			"name": { match: /ium/ },
			"desc": { match: /metalloid/ }
		}
		angular.forEach(comparableStrings, function (value, key) {
			filtered = Elements.filter(key, value);
			expect(Object.keys(filtered).length).toBeGreaterThan(0);
		});
	});
		
	it("should process filtering according to the custom criteria", function () {
		function criteria(element) {
			return !!element.symbol.match(/H/);
		}
		var filtered = Elements.filter(criteria);
		expect(Object.keys(filtered).length).toBeGreaterThan(0);
	});
});