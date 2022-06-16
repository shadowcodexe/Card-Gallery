
function slidesPlugin(activeSlide) {

    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('slide-active')
    
    const body = document.querySelector('body')
    
    for (const slide of slides) {
    
        slide.addEventListener('click', () => {
            
            clearActiveClasses()
    
            slide.classList.add('slide-active')
    
            body.style.backgroundImage = slide.style.backgroundImage
        })
    
    }
    
    function clearActiveClasses() {
    
        slides.forEach(slide => slide.classList.remove('slide-active'))
    
    }

}

slidesPlugin(2)