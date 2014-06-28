$(document).ready(function () {
    var var1 = $('#variant1');
    var var2 = $('#variant2');
    var variants = $('.buy-panelbox');
    var hndl = function (cont) {
        var $container = $(cont);
        $container.on('click', '.credit.disabled', function () {
            $(this).removeClass('disabled');
            $(this).find('i.sp.radio').addClass('selected');
            $container.find('.price-block').addClass('disabled');
            $container.find('.new-price i.sp.radio').removeClass('selected');
        });
        $container.on('click', '.price-block.disabled', function () {
            $(this).removeClass('disabled');
            $(this).find('i.sp.radio').addClass('selected');
            $container.find('.credit').addClass('disabled');
            $container.find('.credit i.sp.radio').removeClass('selected');
        });

        $container.find('.sp.qst').hover(function () {
            $container.find('.js-qst').toggle();
        });

    };
    $('.counter').on('click', '.add', function(){
        $(this).parent().find('input').val(function(index, value){
            return value * 1 + 1;
        });
    });
    //hndl(var1);
    //hndl(var2);
    variants.each(function(){
        hndl($(this));
    });
});
