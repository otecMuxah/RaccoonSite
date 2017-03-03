$(document).ready(function () {
    var fired = 0,
        whiteHeader = 0;

    const
        tabletScreenWidth = 800,
        $hamburger = $('.hamburger'),
        $headNav = $('.header-nav'),
        $header = $('.header'),
        $mainBannerMore = $('.main-banner_more'),
        $mainBanner = $('.main-banner'),
        $window = $(window),
        $headNavDrop = $('.header-nav_item'),
        $headNavDropdown = $('.header-nav_item__dropdown'),
        $toTopButton = $('.back-to-top');

    if ($('.partners_list.owl-carousel').length > 0) {
        $('.partners_list.owl-carousel').owlCarousel({
            margin: 10,
            items: 7,
            nav: true,
            loop:true,
            autoplay:true,
            autoplayTimeout:1000,
            responsive: {
                0: {
                    items: 2
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items:5
                },
                1140: {
                    items: 7
                }
            }
        });
    }

    if ($(".testimonials_list.owl-carousel").length > 0) {
        $(".testimonials_list.owl-carousel").owlCarousel({
            startPosition: 2,
            center: true,
            autoplay: true,
            items: 5,
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1140: {
                    items: 5
                }
            }
        });
    }


    if ($('.partners_list.owl-carousel').length > 0) {
        $('.main-banner_wrapper.owl-carousel').owlCarousel({
            items: 1,
            nav: false,
            loop: true,
            autoplay: true
        });
    }


    $headNavDrop.on('touchstart mouseenter', function () {
        $(this).closest('.header-nav_item').addClass('header-nav_item__active');
    });

    $headNavDrop.on('touchmove  mouseleave', function () {
        $(this).closest('.header-nav_item').removeClass('header-nav_item__active');
    });
    $headNavDropdown.on('click', function (e) {
        e.preventDefault();
        $(this).closest('.header-nav_item').toggleClass('header-nav_item__show-dropdown')
    })
    $hamburger.on('click', function () {
        $(this).toggleClass('is-active');
        $('.header-nav').toggleClass('header-nav_visible');
    });

    $mainBannerMore.on('click', function () {
        $('.partners').velocity("scroll", {
            offset: -60
        });
    });

    $toTopButton.on('click', function () {
        $mainBanner.velocity('scroll', {

        })
    });

    // $.fn.isOnScreen = function () {
    //     var element = this[0];
    //     var bounds = element.getBoundingClientRect();
    //     return bounds.top < window.innerHeight && bounds.bottom > 0;
    // };
    //
    // function showElement() {
    //     var $count = $('.count');
    //     if (fired == 0 && $count.isOnScreen()) {
    //         fired = 1;
    //         $count.each(function () {
    //             $(this).prop('Counter', 0).animate({
    //                 Counter: $(this).text()
    //             }, {
    //                 duration: 800,
    //                 easing: 'swing',
    //                 step: function (now) {
    //                     $(this).text(Math.ceil(now));
    //                 }
    //             });
    //         });
    //     }
    // }

    $window.resize($.throttle(250, function () {
        var viewportWidth = $(window).width();
        if (viewportWidth > tabletScreenWidth) {
            $hamburger.removeClass('is-active');
            $headNav.removeClass('header-nav_visible');
        }
    }));

    var callbackScroll = function () {
        if ($window.scrollTop() > $mainBanner.height()) {
            whiteHeader = 1;
            $header.addClass('header__fixed');
            $mainBannerMore.addClass('hidden');
            $toTopButton.removeClass('hidden');
        } else {
            whiteHeader = 0;
            $header.removeClass('header__fixed');
            $mainBannerMore.removeClass('hidden');
            $toTopButton.addClass('hidden');
        }
        if (fired == 0) {
            // showElement();
        }
    };

    window.addEventListener('scroll', $.throttle(250, callbackScroll));
});