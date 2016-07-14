/**
 * Created by Saniac on 2016/7/13.
 */
$(document).ready(function () {
    changeWidth();
    $(window).resize(function () {
        changeWidth();
    });
    //防止过长的字符串捣乱
    $('.ff-item-s span').each(function () {
        if ($(this).text().length>6){
            $(this).css('font-size',"12px");
        };
    });
    

});

function changeWidth() {
    var smallWidth = $('.zf-flex-form').width();
    $('.zf-flex-form .ff-item-b>input').css('width',smallWidth-240-4);
    $('.zf-flex-form .ff-item-b-multi-line textarea').css({'width':smallWidth-240-2});
    $('.zf-flex-form .ff-item-s input,.zf-flex-form .ff-item-s select') .css('width',160);
    console.log(smallWidth);
    if(smallWidth<650&&smallWidth>=590){
        $('.zf-flex-form .ff-item-s input,.zf-flex-form .ff-item-s select') .css('width',smallWidth-450);
        console.log($('.zf-flex-form .ff-item-s input,.zf-flex-form .ff-item-s select') .css('width'));
    }
    else if(smallWidth<=650){
        $('.zf-flex-form .ff-item-s input,.zf-flex-form .ff-item-s select') .css('width',smallWidth-240) ;
    }

}