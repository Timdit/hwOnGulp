import plumber from "gulp-plumber"; /* обработка ошибок */
import notify from 'gulp-notify'; /* сообщения (подсказки) */
import browsersync from "browser-sync"; /* этот плагин для открытия браузера и перезагрузки */
import newer from "gulp-newer"; /* проверка обновлений. Проверяем есть ли такая картинка */

// экспортируем объект
export const plugins = {
    plumber,
    notify,
    browsersync,
    newer,
}