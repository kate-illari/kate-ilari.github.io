(function($) {
    "use strict";

    $(function() {

        var elemWidth = $('.carousel-element').outerWidth(),
            leftBut = $('.carousel-arrow-left'),
            rightBut = $('.carousel-arrow-right');


        leftBut.click(function(){
            var leftIndent = parseInt($('.carousel-list').css('left')) + elemWidth,
                scrollCar = function () {
                    $('.carousel-list').animate({'left': leftIndent}, 500, function () {
                        $('.carousel-element:first').before($('.carousel-element:last'));
                        $('.carousel-list').css({'left' : '-400px'});
                    });
                };

            if (!$('.carousel-list').is(':animated')) {
                scrollCar();
            }
        });


        rightBut.click(function() {
            var rightIndent = parseInt($('.carousel-list').css('left')) - elemWidth,
                scrollCar = function () { 
                $('.carousel-list').animate({'left': rightIndent}, 500, function () {
                    $('.carousel-element:last').after($('.carousel-element:first'));
                    $('.carousel-list').css({'left': '-400px'});
                });
            };

            if (!$('.carousel-list').is(':animated')) {
                scrollCar();
            }
        });

    });


})(jQuery);