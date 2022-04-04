import burger from './burgerMenu/burger.js'
import blur from './blurEffect/blur.js'
import Slider from './slider/slider.js'

burger()
blur()
const slider = new Slider({
    slider: '.main__content-slider',
    sliderLine: '.main__content-sliderLine',
    next: '.main__content-sliderNext',
    prev: '.main__content-sliderPrev',
    direction: 'X',
})