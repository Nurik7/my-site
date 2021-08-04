$(function () {
    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.slider-prev-btn'),
        nextArrow: $('.slider-next-btn'),
    });
    $('.sponsor__slider-inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true
    });
});

const btns = document.querySelectorAll('.filter__btns-item');
const select = document.getElementById('filter-options');
const images = document.querySelectorAll('.filter-content .scale-up-center');


for (let btn of btns) {
    btn.onclick = function () {
        filterImage(this.dataset.filter);
    }
}

function filterImage(sel) {
    for (let img of images) {
        img.style.display = 'none';

        if (img.classList.contains(sel)) {
            setTimeout(() => {
                img.style.display = 'inline-block';
            }, 0);
        }
    }
    for (let btn of btns) {
        if (btn.dataset.filter === sel) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    }

    select.value = sel;
}

select.addEventListener('change', () => {
    filterImage(select.value);
});
