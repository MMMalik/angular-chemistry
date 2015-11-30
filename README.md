## angular-chemistry

Install:

`npm i angular-chemistry`

`bower install angular-chemistry`

This project aims for creating a set of chemistry-related tools for AngularJS.

The module is registered as `mmAngularChemistry`. It has [**ngSanitize**](https://docs.angularjs.org/api/ngSanitize) module as a dependency.

`angular.module('myModule', ['mmAngularChemistry']);`

Currently available are:
+ `Elements` service, which is a built-in periodic table of elements along with some utils
+ `chemEntity` and `chemScheme` directives for parsing and rendering chemical formulas
+ `scientific` filter for applying the scientific notation to a number
   
coming in the next version:
+ `Pubchem` service and directives for interacting with [Pubchem](https://pubchem.ncbi.nlm.nih.gov/) database.
+ more filters and utils

For detailed information and examples refer to the [project site](http://mmmalik.github.io/angular-chemistry/#/).

## License
MIT