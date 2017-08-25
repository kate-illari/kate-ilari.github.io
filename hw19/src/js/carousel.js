(function ($) {
  "use strict";

  $(function () {

    const jItem = $('.jcarousel-item'),
      jList = $('.jcarousel-list'),
      elemWidth = jItem.outerWidth(),
      leftBut = $('.jcarousel-control-prev'),
      rightBut = $('.jcarousel-control-next');
    let totalPics = 0,
      picState = 1;

    jItem.each(function () {
      totalPics++;
    });

    const moveCarousel = function (dir, mult) {

      const indent = parseInt(jList.css('left')) + (elemWidth * dir * mult);

      const scrollCar = function () {

        jList.animate({left: indent}, 500, function () {

          for (let i = mult; i > 0; --i) {
            if (dir > 0) {
              $('.jcarousel-item:first').before($('.jcarousel-item:last'));
            } else {
              $('.jcarousel-item:last').after($('.jcarousel-item:first'));
            }
          }
          jList.css({left: -(elemWidth) + 'px'});
          $('.jcarousel-pagination-link').each(function () {
            $(this).removeClass('active-j');
          });
          $('.jcarousel-pagination-link:eq('
            + (Math.abs(picState) - 1 )
            + ')').addClass('active-j');
        });
        if (dir > 0) {
          picState = picState === 0 ? totalPics - mult : picState - mult;
        } else {
          picState = (picState + mult) % totalPics;
        }

      };

      if (!jList.is(':animated')) {
        scrollCar();

      }
    };

    jItem.each(function () {
        let idx = $(this).index();
        $(this).attr('id', idx);

        $('.jcarousel-pagination')
          .append('<a class="jcarousel-pagination-link" href=""></a>');
      });

    $('.jcarousel-pagination-link').on('click', function (e) {
      const diff = $(this).index() - $('.active-j').index(),
        direction = diff / Math.abs(diff);

      e.preventDefault();
      moveCarousel(-direction, Math.abs(diff));
    }).first().addClass('active-j');

    leftBut.click(function (e) {
      e.preventDefault();
      moveCarousel(1, 1);
    });

    rightBut.click(function (e) {
      e.preventDefault();
      moveCarousel(-1, 1);
    });

    setInterval(function () {
      moveCarousel(-1, 1);
    }, 4000);
  });

})(jQuery);

