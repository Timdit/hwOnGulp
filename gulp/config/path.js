// получим имя папки с проектом
import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './app/build'; /* путь к папке с конечным результатом */
const srcFolder = './app/src'; /* путь к папке с исходными файлами */

export const path = {
    // объект путей с результатом
    build: {
        html: `${buildFolder}/`,
        style: `${buildFolder}/style/`,
        images: `${buildFolder}/images/`,
        js: `${buildFolder}/script/`,
        fonts: `${buildFolder}/fonts/`,
    },
    // объект путей с имходными файлами
    src: {
        html: `${srcFolder}/*.pug`,
        style: `${srcFolder}/style/style.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        js: `${srcFolder}/script/app.js`,
    },
    // объект путей к файлам и папкам за которыми нужно следить
    watch: {
        html: `${srcFolder}/**/*.pug`,
        style: `${srcFolder}/style/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,png,jpeg,gif,webp}`,
        js: `${srcFolder}/script/**/*.js`,
    },
    clean: buildFolder,
    buildFolder,
    srcFolder,
    rootFolder,
}