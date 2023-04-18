    const nextSlideBtn = document.getElementById('next-slide')
    const previousSlideBtn = document.getElementById('previous-slide')
    let slideNumber = document.getElementById('slide-number')
    
    const carousel = document.querySelector('.slider--slides')

    const getSlides = () => {
        let slides = document.querySelectorAll('.slide')
        return slides
    }
    // setInterval(() => {
    //     let slides = document.querySelectorAll('.slide')
    // }, 500)
    let slides = getSlides()
    let counter = 0 
    let stepSize = slides[0].offsetWidth

    nextSlideBtn.onclick = () => {
        if (counter >= slides.length - 1){
            counter = -1
        }
        carousel.classList.add('slide--animation')
        counter++
        slideNumber.textContent = counter + 1
        carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`
    }

    previousSlideBtn.onclick = () => {
        if (counter <= 0 ){
            counter = slides.length
        }
        carousel.classList.add('slide--animation')
        counter--
        slideNumber.textContent = counter + 1
        carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`
    }
    // // карусель 
    // const nextSlideBtn = document.getElementById('next-slide')
    // const previousSlideBtn = document.getElementById('previous-slide')
    // let slideNumber = document.getElementById('slide-number')
    // const slides = document.querySelectorAll('.slide')
    // let currentSlide = 0


    // function nextSlide() {
    //     slideTransition(currentSlide + 1)
    // }

    // function previousSlide() {
    //     slideTransition(currentSlide - 1)
    // }

    // function slideTransition(n) {
    //     slides[currentSlide].classList.remove('slide-showing')
    //     currentSlide = (n + slides.length) % slides.length 
    //     slides[currentSlide].classList.add('slide-showing')
    //     slideNumber.textContent = currentSlide + 1
    // }

    // nextSlideBtn.onclick = function() {
    //     nextSlide()
    // }
    // previousSlideBtn.onclick = function() {
    //     previousSlide()
    // }
    


    // навигация области загрузки изображений
    const galleryBtn = document.getElementById('gallery-btn')
    const galleryList = document.getElementById('gallery')
    const sampleBtn = document.getElementById('sample-btn')
    const sampleList = document.getElementById('sample')
    const backgroundBtn = document.getElementById('background-btn')
    const backgroundList = document.getElementById('background')

    galleryBtn.onclick = function(e) {
        e.preventDefault()
        sampleBtn.classList.remove('nav-item--active')
        backgroundBtn.classList.remove('nav-item--active')
        galleryBtn.classList.add('nav-item--active')
        galleryList.style.display = 'flex' 
        sampleList.style.display = 'none'
        backgroundList.style.display = 'none'
    }
    sampleBtn.onclick = function(e) {
        e.preventDefault()
        backgroundBtn.classList.remove('nav-item--active')
        galleryBtn.classList.remove('nav-item--active')
        sampleBtn.classList.add('nav-item--active')
        galleryList.style.display = 'none' 
        sampleList.style.display = 'flex'
        backgroundList.style.display = 'none'
    }
    backgroundBtn.onclick = function(e) {
        e.preventDefault()
        sampleBtn.classList.remove('nav-item--active')
        galleryBtn.classList.remove('nav-item--active')
        backgroundBtn.classList.add('nav-item--active')
        galleryList.style.display = 'none' 
        sampleList.style.display = 'none'
        backgroundList.style.display = 'flex'
    }


    // инпуты изображений для 3-х вкладок
    const inputGallery = document.getElementById('gallery--img')
    inputGallery.onchange = function() {
        handleFileSelect(inputGallery, galleryList, 'gallery-img')
    }
    const inputSample = document.getElementById('sample--img')
    inputSample.onchange = function() {
        handleFileSelect(inputSample, sampleList, 'sample-img')
    }
    const inputBackground = document.getElementById('background--img')
    inputBackground.onchange = function() {
        handleFileSelect(inputBackground, backgroundList, 'background-img')
    }
    function handleFileSelect(input, list, className) {
        var reader = new FileReader();
    
        reader.onload = function(theFile) {
            let img = document.createElement('img')
            img.setAttribute('src', theFile.target.result || window.URL.createObjectURL(fl[0]))
            img.classList.add(className)
            list.append(img)
        }
        if (input.files.length === 0) {
            return
        }
        let iFile = input.files[0]
        reader.readAsDataURL(iFile);
    }


    // модальное окно
    const modal = document.querySelector('.modal--wrapper')
    const modalOpenBtn = document.querySelector('.to-cart-btn')
    const modalCloseBtn = document.querySelector('.modal--close-btn')
    const toCartBtn = document.querySelector('.modal--go-cart-btn')

    modalOpenBtn.onclick = () => {
        modal.classList.add('modal-active')
    }
    modalCloseBtn.onclick = () => {
        modal.classList.remove('modal-active')
    }
    toCartBtn.onclick = () => {
        alert('Вы перешли в корзину...')
        modal.classList.remove('modal-active')
    }

    //добавление изображения в центр блок, в начало какрусели
    const galleryImages = document.querySelectorAll('.gallery-img')
    const sampleImages = document.querySelectorAll('.sample-img')
    const backgroundImages = document.querySelectorAll('.background-img')
    const sliderWindow = document.querySelector('.slider--slides')

    const inserImgToSlider = (list) => {
        for (let image of list) {
            image.addEventListener('click', () => {
                let img = image.cloneNode()
                img.classList.add('slide')
                sliderWindow.insertBefore(img, sliderWindow.firstChild)
            })
        }
    }
    inserImgToSlider(galleryImages)
    inserImgToSlider(sampleImages)
    inserImgToSlider(backgroundImages)


    