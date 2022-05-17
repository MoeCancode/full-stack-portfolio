console.log("yessirr");

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:45,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})