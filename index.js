    const nextSlideBtn = document.getElementById('next-slide')
    const previousSlideBtn = document.getElementById('previous-slide')
    const slideNumber = document.getElementById('slide-number')
    const carousel = document.querySelector('.slider--slides')

    const slides = document.querySelectorAll('.slide')
    let counter = 0 
    const stepSize = slides[0].offsetWidth
    
    function sliderBtnClick(counter) {
        carousel.classList.add('slide--animation')
        slideNumber.textContent = counter + 1
        carousel.style.transform = 'translateX(' + `${-stepSize * counter}px)`
    }

    nextSlideBtn.onclick = () => {
        counter >= slides.length - 1 ? counter = -1 : null
        counter++
        sliderBtnClick(counter)
    }
    previousSlideBtn.onclick = () => {
        counter <= 0 ? counter = slides.length : null
        counter--
        sliderBtnClick(counter)
    }
    
    // навигация области загрузки изображений
    const galleryBtn = document.getElementById('gallery-btn')
    const galleryList = document.getElementById('gallery')
    const sampleBtn = document.getElementById('sample-btn')
    const sampleList = document.getElementById('sample')
    const backgroundBtn = document.getElementById('background-btn')
    const backgroundList = document.getElementById('background')

    function navBtnClick(btn, list) {
        btn.classList.add('nav-item--active')
        list.style.display = 'flex'
        if (btn === galleryBtn ) {
            sampleBtn.classList.remove('nav-item--active')
            backgroundBtn.classList.remove('nav-item--active')
            sampleList.style.display = 'none'
            backgroundList.style.display = 'none' 
        } else if ( btn === sampleBtn) {
            galleryBtn.classList.remove('nav-item--active')
            backgroundBtn.classList.remove('nav-item--active')
            galleryList.style.display = 'none'
            backgroundList.style.display = 'none' 
        } else {
            galleryBtn.classList.remove('nav-item--active')
            sampleBtn.classList.remove('nav-item--active')
            galleryList.style.display = 'none'
            sampleList.style.display = 'none'
        }
    }
    galleryBtn.onclick = function(e) {
        navBtnClick(galleryBtn, galleryList)
    }
    sampleBtn.onclick = function(e) {
        navBtnClick(sampleBtn, sampleList)
    }
    backgroundBtn.onclick = function(e) {
        navBtnClick(backgroundBtn, backgroundList)
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
        let reader = new FileReader();
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

    const insertImgToSlider = (list) => {
        for (let image of list) {
            image.addEventListener('click', () => {
                let img = image.cloneNode()
                img.classList.add('slide')
                sliderWindow.insertBefore(img, sliderWindow.firstChild)
            })
        }
    }
    insertImgToSlider(galleryImages)
    insertImgToSlider(sampleImages)
    insertImgToSlider(backgroundImages)


    