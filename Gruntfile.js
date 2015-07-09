module.exports = function (grunt) {

    grunt.initConfig({
        transport: {
            options: {
                debug: false,
                //idleading: 'dist/',
            },
            application: {
                files: [
                    {src: './src/application/application.js', dest: './.build/application/application.js'},
                    {src: './src/application/util.js', dest: './.build/application/util.js'},
                    {src: './src/application/jquery-demo.js', dest: './.build/application/jquery-demo.js'}
                ]
            }
        },
        concat: {
            main: {
                options: {
                    relative: true
                },
                files: {
                    './dist/application.js': ['./.build/application/*'], // 合并.build/application/*.js文件到dist/application.js中
                }
            }
        },
        uglify: {
            main: {
                files: {
                    './dist/application.min.js': ['./sea-modules/seajs/seajs/2.2.3/sea.js', './sea-modules/jquery/jquery/2.1.0/jquery.js','./dist/application.js'] // dist/application.js进行压缩，之后存入dist/application.min.js文件
                }
            }
        },
        clean: {
            build: ['.build'] //清除build文件夹
        }
    });

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean'])
};