$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css('scrollBehavior', 'auto');
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css('scrollBehavior', 'smooth');
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // typing text animation script
    var typed = new Typed('.typing', {
        strings: ['Developer', 'Student', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed('.typing-2', {
        strings: ['Developer', 'Student', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});

//AUDIO VOLUME
var vid = document.getElementById('backgroundMusic');
function setVolume() {
    vid.volume = 0.05;
}
setVolume();

//GSAP ANIMATION
gsap.registerPlugin(ScrollTrigger);
gsap.from('.about-content', {
    scrollTrigger: '.about-content',
    duration: 1.5,
    opacity: 1,
    x: -150,
    stagger: 0.2,
});

gsap.from('.serv-content', {
    scrollTrigger: '.serv-content',
    duration: 1.5,
    opacity: 1,
    x: -250,
    stagger: 0.2,
});

gsap.from('.skills-content', {
    scrollTrigger: '.skills-content',
    duration: 1.5,
    opacity: 1,
    x: -250,
    stagger: 0.2,
});

gsap.from('.carousel', {
    scrollTrigger: '.carousel',
    duration: 1.5,
    opacity: 1,
    x: -250,
    stagger: 0.2,
});

gsap.from('.contact-content', {
    scrollTrigger: '.contact-content',
    duration: 1.5,
    opacity: 1,
    x: -250,
    stagger: 0.2,
});
