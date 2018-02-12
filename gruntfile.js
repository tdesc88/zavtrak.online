module.exports = function(grunt) {
    // Инициализация конфига GruntJS
    grunt.initConfig({

        sync: {              
             src: {
                files: [{
                    cwd: './public/src/',
                    src: ['*.html'],
                    dest: '.meteor/local/build/programs/web.browser/app/src'
                }],
                verbose: true, // Display log messages when copying files
                failOnError: true
                //pretend: true
            },

        },                  
        watch: {
            scripts: {
                files: './public/src/*.html',
                 tasks: ['sync']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask( 'default', 'watch');


};