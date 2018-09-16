$(function () {
    let dengyu=$(".icon-yunsuan-dengyu");
    let cuo=$(".cuo");
    console.log(cuo);
    dengyu.click(function() {
        $(".hei").slideDown(600);
        $(".icon-yunsuan-dengyu").css("display","none");
        cuo.css("display","block")
        $(".icon-gouwudai101").css("display","none");
    })
    cuo.click(function() {
        $(".hei").slideUp(600);
        $(".icon-yunsuan-dengyu").css("display","block");
        cuo.css("display","none");
        $(".icon-gouwudai101").css("display","block");
    })
//////////////////////////////底部////////////////////////////////
    $(".min_nav .navlist").each(function(index,d){
        $(".min_nav .navlist").eq(index).click(function(event) {
            $(".xiala").eq(index).toggle("normal");
        });
    })


})