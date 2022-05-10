// NAVIGATION BUTTON 
// NAVIGATION BUTTON 

// pobieramy elementy do animacji nawigacji

const navigationButton = document.querySelector('.navBtn');
const navigationBar = document.querySelector('nav');
const content = document.querySelector('main');

// funkcja animacji nawigacji

function navBtnAnimation() {
    navigationButton.classList.toggle('active');
    navigationBar.classList.toggle('active');
    content.classList.toggle('active');
}

// nasłuchiwanie na wciśnięcie burgera

navigationButton.addEventListener('click', navBtnAnimation)

// SLIDER
// SLIDER

//parametry
let activeElement = 0;
let timeChange = 5000;

//pobieramy 4 elemenety, na których pracujemy
const colorImgHtml = document.querySelector('.color');
const h1Html = document.querySelector('.skills h1');
const
    switchBtn = document.querySelectorAll('.switch div');

//informacje w tablicach o elementach podmienionych 
const colorImages = ['img/html-css-js.png', 'img/flex-grid.png', 'img/sass-less.png', 'img/wp.png'];
const names = ['HTML & CSS & JS', 'Flexbox & CSS Grid',
    'SASS/LESS', 'WordPress', 'Bootstrap'
];

// funkcja slidera

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    h1Html.textContent = names[activeElement];
    for (i = 0; i < colorImages.length; i++) {
        switchBtn[i].classList.remove('active');
    }
    switchBtn[activeElement].classList.add('active');
}

setInterval(changeElement, timeChange);

//ANIMACJA PRZY SCROLLOWANIU 
//ANIMACJA PRZY SCROLLOWANIU 

// nasłuchiwanie na scroll

window.addEventListener('scroll', function () {

    // przypisanie do zmiennych

    const windowHeight = window.outerHeight;
    const scrollValue = window.scrollY;

    const offerH = document.querySelector('.offers h1');
    const offerHFromTop = offerH.offsetTop;

    const offer1 = document.querySelector('.offer1');
    const offer1FromTop = offer1.offsetTop;

    const offer2 = document.querySelector('.offer2');
    const offer2FromTop = offer2.offsetTop;

    const offer3 = document.querySelector('.offer3');
    const offer3FromTop = offer3.offsetTop;

    const offer4 = document.querySelector('.offer4');
    const offer4FromTop = offer4.offsetTop;

    const aboutH = document.querySelector('.about>h1');
    const aboutHFromTop = aboutH.offsetTop;

    const profile1 = document.querySelector('.profile:nth-of-type(1)');
    const profile1FromTop = profile1.offsetTop;

    const profile2 = document.querySelector('.profile:nth-of-type(2)');
    const profile2FromTop = profile2.offsetTop;

    // warunki dla poszczególnych elementów

    // sposób liczenia dla komputera

    if (window.devicePixelRatio <= 1.25) {
        if (scrollValue + windowHeight / 2 > offerHFromTop) {
            offerH.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > offer1FromTop) {
            offer1.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > offer2FromTop) {
            offer2.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > offer3FromTop) {
            offer3.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > offer4FromTop) {
            offer4.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > aboutHFromTop) {
            aboutH.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > profile1FromTop) {
            profile1.classList.add('active');
        }

        if (scrollValue + windowHeight / 2 > profile2FromTop) {
            profile2.classList.add('active');
        }
    }
    // sposób liczenia dla urządzenia mobilnego o ratio większym niż 1.25
    else {
        if (scrollValue + windowHeight > offerHFromTop) {
            offerH.classList.add('active');
        }

        if (scrollValue + windowHeight > offer1FromTop) {
            offer1.classList.add('active');
        }

        if (scrollValue + windowHeight > offer2FromTop) {
            offer2.classList.add('active');
        }

        if (scrollValue + windowHeight > offer3FromTop) {
            offer3.classList.add('active');
        }

        if (scrollValue + windowHeight > offer4FromTop) {
            offer4.classList.add('active');
        }

        if (scrollValue + windowHeight > aboutHFromTop) {
            aboutH.classList.add('active');
        }

        if (scrollValue + windowHeight > profile1FromTop) {
            profile1.classList.add('active');
        }

        if (scrollValue + windowHeight > profile2FromTop) {
            profile2.classList.add('active');
        }
    }

    // ukrycie elementów gdy scroll poniżej 100px

    if (scrollValue < 200) {
        offerH.classList.remove('active');
        offer1.classList.remove('active');
        offer2.classList.remove('active');
        offer3.classList.remove('active');
        offer4.classList.remove('active');
        aboutH.classList.remove('active');
        profile1.classList.remove('active');
        profile2.classList.remove('active');
    }
});

// SCROLLSPY
// SCROLLSPY

// nasłuchiwanie na scroll

window.addEventListener('scroll', function () {

    // przypisanie do zmiennych

    const windowHeight = window.outerHeight;
    const scrollValue = window.scrollY;

    const skillsH = document.querySelector('.skills');
    const skillsHFromTop = skillsH.offsetTop;

    const offersH = document.querySelector('.offers');
    const offersHFromTop = offersH.offsetTop;

    const aboutH = document.querySelector('.about');
    const aboutHFromTop = aboutH.offsetTop;

    const contactH = document.querySelector('.contact');
    const contactHFromTop = contactH.offsetTop;

    // sprawdzanie warunków

    if (scrollValue < skillsHFromTop - windowHeight / 2) {
        document.querySelector('nav ul li:nth-of-type(1) a').classList.add('active');
        document.querySelector('nav ul li:nth-of-type(2) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(3) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(4) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(5) a').classList.remove('active');
    } else if (scrollValue < offersHFromTop - windowHeight / 2) {
        document.querySelector('nav ul li:nth-of-type(1) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(2) a').classList.add('active');
        document.querySelector('nav ul li:nth-of-type(3) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(4) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(5) a').classList.remove('active');
    } else if (scrollValue < aboutHFromTop - windowHeight / 2) {
        document.querySelector('nav ul li:nth-of-type(1) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(2) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(3) a').classList.add('active');
        document.querySelector('nav ul li:nth-of-type(4) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(5) a').classList.remove('active');
    } else if (scrollValue < contactHFromTop - windowHeight / 2) {
        document.querySelector('nav ul li:nth-of-type(1) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(2) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(3) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(4) a').classList.add('active');
        document.querySelector('nav ul li:nth-of-type(5) a').classList.remove('active');
    } else {
        document.querySelector('nav ul li:nth-of-type(1) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(2) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(3) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(4) a').classList.remove('active');
        document.querySelector('nav ul li:nth-of-type(5) a').classList.add('active');
    }
})