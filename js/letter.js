/**
 * Created by Saniac on 2016/7/13.
 */
$(document).ready(function () {
    changeWidth();
    $(window).resize(function () {
        changeWidth();
    })
});

function changeWidth() {
    var smallWidth = $('.flex-form').width();
    $('.flex-form .ff-item-b input').css('width',smallWidth-240);
    $('.flex-form .ff-item-b-multi-line textarea').css('width',smallWidth-240);
    $('.flex-form .ff-item-s input,.flex-form .ff-item-s select') .css('width',160);
    console.log(smallWidth);
    if(smallWidth<650&&smallWidth>=590){
        $('.flex-form .ff-item-s input,.flex-form .ff-item-s select') .css('width',smallWidth-450);
        console.log($('.flex-form .ff-item-s input,.flex-form .ff-item-s select') .css('width'));
    }
    else if(smallWidth<=650){
        $('.flex-form .ff-item-s input,.flex-form .ff-item-s select') .css('width',smallWidth-240) ;
    }

}