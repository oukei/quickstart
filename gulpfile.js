var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var buildBase = 'public/build/';

var paths = {
    'dev': {
        'less': 'resources/assets/less/',
        'js': 'resources/assets/js/',
        'img': 'resources/assets/img/',
        'lib': 'resources/assets/bower_components/'
    },
    'assets': {
        'css': 'public/css/',
        'js': 'public/js/',
        'img': 'public/img/',
        'lib': 'public/lib/'
    },
    'build': {
        'css': buildBase +'css/',
        'js': buildBase + 'js/',
        'img': buildBase + 'img/',
        'lib': buildBase + 'lib/'
    }
};

elixir(function(mix) {
    // js
    mix.scripts(paths.dev.lib + 'jquery/dist/jquery.js', paths.assets.js, '.');
    mix.scripts(paths.dev.lib + 'bootstrap/dist/js/bootstrap.js', paths.assets.js, '.');

    // css
    mix.styles(paths.dev.lib + 'bootstrap/dist/css/bootstrap.css', paths.assets.css, '.');
    mix.less(paths.dev.less + '*.less', paths.assets.css);

    // version
    mix.version([
        paths.assets.css + '*.css',
        paths.assets.js + '*.js',
        paths.assets.img + '*.*'
    ]);

    mix.browserSync({
        proxy: 'quick.me'
    });
});
