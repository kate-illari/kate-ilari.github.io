(function ($) {
  "use strict";

const acc = $('.accordion');

acc.click(function () {
  if ($(this).hasClass('active-acc')) {
    $(this).removeClass("active-acc");
  }
    acc.removeClass('active-acc');
    $(this).addClass("active-acc");
});


})(jQuery);