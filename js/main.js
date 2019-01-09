$(document).ready(function(){


    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    /*


    if($(window).innerWidth() < 768){
        $('.has_submenu').each(function(){
            var has_submenu=$(this);
            var sub_menu=$(this).find('.sub_menu');
            $(has_submenu).on('click', function(e){
                e.preventDefault();
                if($(sub_menu).is(':visible')){
                    $(sub_menu).slideUp();
                }else{
                    $(sub_menu).slideDown();
                }
            });
        });
    }



    if($('.product_bigimg_slider .slider_item').length >1){
        $('.product_bigimg_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            //fade: true,
            asNavFor: '.product_slider_nav',
            responsive: [

                {
                    breakpoint: 660,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });
    }


    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_bigimg_slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite:false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    vertical:true,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow:4,
                    vertical:true,
                }
            },
            {
                breakpoint: 660,
                settings: {
                    vertical:true,
                    slidesToShow: 3,
                }
            }
        ]
    });


    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
            $(this).removeClass('act').text('Развернуть');
        }else{
            $('#more').slideDown();
            $(this).addClass('act').text('Свернуть');
        }
    });


    $('.sidebar_menu li').each(function(){
        var li=$(this);
        var arrow=$(this).find('.arrow');
        var level2=$(this).find('.level2');
        $(arrow).on('click', function(){
            $('.level1>li').removeClass('active');
            $('.level2').slideUp();
            if($(level2).is(':visible')){
                $(level2).slideUp();
                $(li).removeClass('active');
            }else{
                $(level2).slideDown();
                $(li).addClass('active');
            }
        });

    });


    $("#order_product").validate();
    $("#order_call_form").validate();




    $(window).resize(function(){
        var header_height = $('header').outerHeight();
        console.log(header_height);
        $(window).scroll(function(){
            if ($(this).scrollTop() > header_height) {
                $('.main_nav').addClass('fixed');
            } else {
                $('.main_nav').removeClass('fixed');
            }
        });
        if($(window).innerWidth() < 768){
            $('main').css({
                'margin-top':header_height+'px'
            });
            $('.main_nav').css({
                'top':header_height+'px',
                'max-height':'calc(100% - '+header_height+'px)'
            });
        }
    });
    $(window).resize();


    $(window).on('load', function () {
        var $preloader = $('.preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut(300);
        $preloader.delay(50).fadeOut(350);
    });


*/

});


