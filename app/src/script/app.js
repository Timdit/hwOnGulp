import burger from './burgerMenu/burger.js'
import blur from './blurEffect/blur.js'
import Slider from './slider/slider.js'

burger()
blur()
const slider = new Slider({
    slider: '.main__content-slider',
    direction: 'X',
    time: 1000,
    autoplay: true,
    interval: 4000,
    dots: true
})