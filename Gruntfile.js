module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-githooks");
  grunt.loadNpmTasks("grunt-nsp-shrinkwrap");

  grunt.initConfig({
    githooks: {
      all: {
        // Will run the jshint and test:unit tasks at every commit
        'pre-commit': 'validate-shrinkwrap'
      }
    }
  });
};
