
import webpack from "webpack-stream";

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "JS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(webpack({
        mode: app.isBuild ? 'production' : 'development', /* режим разаработчика */
        output: {
            filename: 'app.min.js', /* файл результата */
        }
    }))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream())
}