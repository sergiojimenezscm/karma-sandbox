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
                reporters: ['super-dots', 'coverage']
            },
            once: {
                singleRun: true,
                reporters: 'mocha'
            },
            continuous: {
                singleRun: true,
                reporters: 'super-dots',
                browsers: ['PhantomJS']
            },
            coverage: {
                singleRun: true,
                reporters: ['coverage']
            },
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['jshint']);
};
