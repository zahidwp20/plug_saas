(function ($, window, document) {
    "use strict";

    $(document).on('ready', function () {
        $('.counter-number').counterUp({
            delay: 10,
            time: 1000
        });
        window.addEventListener("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);

        });


        $('.main-nav ul li').on('click', function(){
            $('.main-nav li').removeClass("active");
            $(this).addClass("active");
        });


    });


    $('.video-play-btn').magnificPopup({
        type:'iframe'
    });
    $('.video').magnificPopup({
            type:'iframe'
        });

    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });

})(jQuery, window, document);




