module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
	concat: {
		dist: {
			src: [
				"src/components/*/*.js",
				"!src/components/*/*-test.js"
			],
			dest: "src/components/<%= pkg.name %>-concat.js"
		}
	},
    uglify: {
      build: {
        src: "src/components/<%= pkg.name %>-concat.js",
        dest: "dest/<%= pkg.name %>.min.js"
      }
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  
  grunt.registerTask("default", ["concat", "uglify"]);

};