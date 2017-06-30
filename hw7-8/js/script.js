(function ($, undefined) {
    'use strict';
    $(function () {

        var $tabs = $('.tabs'),
            $articles = $('article'),
            $inputs = $('input'),
            $tooltips = $('.tooltips');

        $articles.hide().first().show();
        $tabs.first().addClass('activeTab');
        $tooltips.hide();

//tabs events

        $tabs.click(function () {
            var articleID = $(this).data('image');
            $articles.hide();
            $tabs.removeClass("activeTab hover");
            $(this).addClass("activeTab");
            $(articleID).show();
        });


        $tabs.hover(function () {
            if (!$(this).hasClass("activeTab")) {
                $(this).addClass("hover");
            }
        }, function () {
            $(this).removeClass("hover");
        });

//form events

        $inputs.hover(function () {
            var tooltipID = $(this).data('input');
            $tooltips.hide();
            $(tooltipID).show();
        }, function () {
            $tooltips.hide();
            $('#formButt').removeClass("tipsShown");
        });

        $('#formButt').click(function () {
            if (!$(this).hasClass("tipsShown")) {
                $(this).addClass("tipsShown");
                $tooltips.show();
            } else {
                $(this).removeClass("tipsShown");
                $tooltips.hide();
            }
        });

    });
})(jQuery);