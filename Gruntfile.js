module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
	concat: {
		build: {
			src: [
				"src/angular-chemistry-app.js",
				"src/components/*/*.js",
				"!src/components/*/*-test.js"
			],
			dest: "src/components/angular-chemistry.js"
		}
	},
	copy: {
		build: {
			files: [
				{ expand: true, cwd: "src/components/", src: "angular-chemistry.js", dest: "dest/" },
			]
		}
	},
    uglify: {
		build: {
			files: {
				"dest/angular-chemistry.min.js": "src/components/angular-chemistry.js"
			}	
		}
    },
	clean: {
		build: ["src/components/angular-chemistry.js"]
	}
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("default", ["concat", "copy", "uglify", "clean"]);

};