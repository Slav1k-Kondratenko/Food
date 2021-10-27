function slider({slidesSelector, container, nextArrow, prevArrow, 
    totalCounter, currentCounter, wrapper, field}) {

    const slides = document.querySelectorAll(slidesSelector),
        offerSlider = document.querySelector(container),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });
    offerSlider.style.position = 'relative';

    const dotsIndicators = document.createElement('ol'),
        dots = [];

    dotsIndicators.classList.add('carousel-indicators');
    offerSlider.append(dotsIndicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-total', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotsIndicators.append(dot);
        dots.push(dot);
    }

    function changeOpacityDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    function changeSlideIndex(totalIndex, currentIndex) {
        if (slideIndex < 10) {
            total.textContent = `0${totalIndex.length}`;
            current.textContent = `0${currentIndex}`;
        } else {
            total.textContent = totalIndex.length;
            current.textContent = currentIndex;
        }
    }

    changeSlideIndex(slides, slideIndex);

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        changeSlideIndex(slides, slideIndex);

        changeOpacityDots();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        changeSlideIndex(slides, slideIndex);

        changeOpacityDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-total');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            changeSlideIndex(slides, slideIndex);

            changeOpacityDots();
        });
    });
}

export default slider;