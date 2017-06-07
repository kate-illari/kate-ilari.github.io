(function ($, undefined) {
    $(function () {

        var tabs = $('.tabs');
        var articles = $('article');
        console.log(articles);

        articles.hide().first().show();
        tabs.first().addClass('activeTab');

        tabs.click(function () {
            articles.hide();
            tabs.removeClass();
            $(this).addClass('activeTab');
            var articleID = $(this).data('image');
            $(articleID).show();
        });

    });
}(jQuery));