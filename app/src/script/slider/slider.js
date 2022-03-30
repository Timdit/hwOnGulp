try {
    class Slider {
        constructor(obj) {
            this.slider = document.querySelector(obj.slider)
            this.sliderLine = this.slider.querySelector(obj.sliderLine)
            this.slides = [...this.sliderLine.children]
            this.next = this.slider.querySelector(obj.next)
            this.prev = this.slider.querySelector(obj.prev)

            this.width = this.slider.clientWidth
            this.height = this.slider.clientHeight
            this.dir = obj.direction.toUpperCase() == 'X' ? 'X' : 'Y'
            this.moveSize = this.dir === 'X' ? this.width : this.height

            this.activeSlide = 0

            this.sliderLine.style = `
                position: relative;
                height: ${this.height}px;
                overflow: hidden;
            `

            this.slides.forEach((slide, i) => {
                slide.style = `
                position: absolute;
                height: ${this.height}px;
                width: ${this.width}px;
               `
                if (i != this.activeSlide) {
                    slide.style.transform = `translate${this.dir}(${this.moveSize}px)`
                }

                if (i === this.slides.length - 1) {
                    slide.style.transform = `translate${this.dir}(${-this.moveSize}px)`
                }
            })

            let interval = setInterval(() => {
                this.move(this.next)
            }, 5000)

            this.slider.addEventListener('mouseover', () => {
                clearInterval(interval)
            })

            this.slider.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                    this.move(this.next)
                }, 5000)
            })


            this.prev.addEventListener('click', () => this.move(this.prev))
            this.next.addEventListener('click', () => this.move(this.next))

        }

        move(btn) {
            let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize

            this.slides.forEach((slide, i) => {
                slide.style.transition = '0s'
                if (i != this.activeSlide) {
                    slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`
                }
            })

            this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`
            this.slides[this.activeSlide].style.transition = '1s'

            if (btn == this.next) {
                this.activeSlide++
                if (this.activeSlide >= this.slides.length) {
                    this.activeSlide = 0
                }
            } else if (btn == this.prev) {
                this.activeSlide--
                if (this.activeSlide <= 0) {
                    this.activeSlide = this.slides.length - 1
                }
            }

            this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`
            this.slides[this.activeSlide].style.transition = '1s'

            this.prev.setAttribute('disabled', 'disabled')
            this.next.setAttribute('disabled', 'disabled')

            setTimeout(() => {
                this.prev.removeAttribute('disabled')
                this.next.removeAttribute('disabled')
            }, 1500);
        }
    }

    const slider = new Slider({
        slider: '.main__content-slider',
        sliderLine: '.main__content-sliderLine',
        next: '.main__content-sliderNext',
        prev: '.main__content-sliderPrev',
        direction: 'X',
    })

} catch (e) {}
export default Slider