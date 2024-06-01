/* TOGGLE NAVBAR */

$(document).ready(function() {
    $('#menu-icon').click(function() {
        $('.navbar').toggleClass('navbar-mobile');
    });

});

/* SCROLL REVEAL */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

/* TYPED JS */

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Wordpress Developer','ERP Consultant'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

