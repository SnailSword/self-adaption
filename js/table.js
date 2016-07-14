/**
 * Created by Saniac on 2016/7/13.
 */
$(document).ready(function(){

    wordLimit("td:first-child");
    window.onresize=function(){
        wordLimit("td:first-child");
    }
});

function wordLimit(item) {
    $(item).each(function(){
        var maxWidth=$(this).width()/parseInt($(".zf-flex-table").css("font-size"));
        if($(this).text().length>maxWidth){
            $(this).text($(this).text().substring(0,maxWidth));
            $(this).html($(this).html()+'...');
        }
    });
}
