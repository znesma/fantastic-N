/* global $, alert. console */

$(function () {
    //Nice scroll
    $('html').niceScroll();

    // add active class by JQuery

    $('.navbar ul li ').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

    });

    // Scroll to top
    $(window).scroll(function () {

        if($(window).scrollTop() >= 1000) {

            $('.scroll').fadeIn(200);
        } else {
            $('.scroll').fadeOut(2000);
        }

    });

    // click on the scroll button

    $('.scroll').on("click", function (e) {
        e.preventDefault();

        $('html, body').animate({

            scrollTop:0
            
        }, 1000);
        
        $('.navbar ul li').removeClass('active');
        $('.navbar .home').addClass('active');
        
    });

    //determine the height of the slider
    var windowHeight = $(window).height(),
        navHeight    = $('.navbar').innerHeight();

        $('.carousel .carousel-item').height(windowHeight + navHeight);
        //console.log(navHeight);


        // counter
        $('.counter').counterUp({
            delay: 20,
            time: 1000
        });
    
        // nav bar links
        const allLinks = document.querySelectorAll('.navbar ul a');
       
            allLinks.forEach(element => {
               
                element.addEventListener("click" , (e) => {
                    

                    e.preventDefault();
                    document.querySelector(e.target.dataset.link).scrollIntoView({

                        behavior :'smooth'
                    });
                });
            });
       

        });