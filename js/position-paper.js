/**
 * Created by Saniac on 2016/7/13.
 */
$(document).ready(function () {
    changeWidth();
    window.onresize=function(){
        changeWidth();
    }
});

function changeWidth() {
    var width = $(".div-pretend-table").width();
    width = width-width%4;
    $('.dpt-first').css("width",width-1);
    if(width<=600&&width>=300) {
        $('.dpt-item-p1').css("width", width / 2 - 1);
        $('.dpt-item-p2').css("width", width / 2 - 1);
        // $('.dpt-item-multi-line .dpt-item-p2').each(function(){
        //     var thisHeight=$(this).Height();
        //     console.log(thisHeight);
        //     $(this).prev().css("height",thisHeight);
        // });
        $('.dpt-item-multi-line>div').css("width", width - 1);
        $('.dpt-item-multi-line>div:first-child').css({"height":"40px",'line-height':"40px"});
    }
    else if(width>600){
        $('.dpt-item-b .dpt-item-p1').css("width",width/2-1);
        $('.dpt-item-b .dpt-item-p2').css("width",width/2-1);
        $('.dpt-item-s .dpt-item-p1').css("width",width/4-1);
        $('.dpt-item-s .dpt-item-p2').css("width",width/4-1);
        $('.dpt-item-multi-line>div:first-child').css({"width":70,"height":"200px",'line-height':"200px"});
        $('.dpt-item-multi-line>div:last-child').css("width",width-72);
        // $('.dpt-item-multi-line>div:first-child').css();
    }
    console.log(width);
}
