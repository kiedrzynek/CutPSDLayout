
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    indicatorParents = document.querySelector('.slider ul'),
    current = 0;

function selectDot() {
    document.querySelector('.slider .selected').classList.remove('selected');
    indicatorParents.children[current].classList.add('selected');
}

//clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}
//init slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
};

//show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
};

//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
};

//left arrow click
arrowLeft.addEventListener('click', function() {
    if(current === 0) {
        current = sliderImages.length;
    };
    slideLeft();
    selectDot();
});

//right arrow click
arrowRight.addEventListener('click', function() {
    if(current === sliderImages.length -1) {
        current = -1;
    }
    slideRight();
    selectDot();
});

//indicators
document.querySelectorAll('.slider ul li').forEach(function(indicator, index) {
    indicator.addEventListener('click', function() {
        current = index;
        reset();
        sliderImages[current].style.display = 'block';
        document.querySelector('.slider .selected').classList.remove('selected');
        indicator.classList.add('selected');
    });
});

startSlide();