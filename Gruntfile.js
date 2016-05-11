module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({        
        concat: {
            dist: {
                src: ['src/core.js','src/grammar.js','src/lexer.js','src/renderer.js','src/parser.js'],
                dest: 'dist/markdown.js'
            }
        }        
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    //Default grunt task
    grunt.registerTask('build', function (target) {        
        grunt.task.run([
            'concat'
        ]);
    });

    grunt.registerTask('default', ['build']);   

};