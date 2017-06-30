(function($) {
    'use strict';
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 4;
                } else if (width >= 350) {
                    width = width / 3;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
        $('select').niceSelect();
    });


    $(function() {

        $(".niceCheck")
            .mousedown(
                function () {
                    changeCheck($(this));
                })
            .each(
                function () {
                    changeCheckStart($(this));
                });
    });

    function changeCheck(el) {
        var input = el.find("input");
        if (!input.attr("checked")) {
            el.css("background-position", "-60px -30px");
            input.attr("checked", true);
        } else {
            el.css("background-position", "-90px 0");
            input.attr("checked", false);
        }
        return true;
    }

    function changeCheckStart(el) {
        var input = el.find("input");
        if (input.attr("checked")) {
            el.css("background-position", "-60px -30px");
        }
        return true;
    }

    $(function() {
        $( ".dropdown" ).hover(
            function(){
                $(this).children(".sub-menu").slideDown(300).animate({backgroundColor:"#4E443C"}, 300);
            },
            function(){
                $(this).children(".sub-menu").stop(true,true).slideUp(300).animate({backgroundColor:"#f8f2ed"});
            });
    });

})(jQuery);