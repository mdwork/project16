$(document).ready(function(){
    var itemServiceBlock = $('.list-service li');

    itemServiceBlock.on('click', function(){
        itemServiceBlock.each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('.big-block-kind-activity')
            .removeClass('new-block-js')
            .html($(this).html())
            .addClass('new-block-js');

        $('.new-block-js .big-foto')
            .animate({
                'opacity':'1'
            },300);
    });
});