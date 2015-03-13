module.exports = function(grunt) {

    //Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            target: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        karma: {
            options: {
                frameworks: ['mocha', 'chai', 'sinon'],
                browsers: ['Chrome', 'Firefox'],
                port: 9999,
                configFile: 'karma.conf.js',
                files: ['test/**/*.js']
            },
            watch: {
                autoWatch: true,
                reporters: 'super-dots'
            },
            once: {
                singleRun: true,
                reporters: 'mocha'
            },
            continuous: {
                singleRun: true,
                reporters: 'super-dots',
                browsers: ['PhantomJS']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
}
