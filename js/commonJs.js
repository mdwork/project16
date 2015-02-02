$(document).ready(function(){
    var itemServiceBlock = $('.list-service li');

    itemServiceBlock.on('click', function(){
        itemServiceBlock.each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        $('.big-block-kind-activity').html($(this).html());
    });
});