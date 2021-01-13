$(document).ready(function(){
    $(".btn").click(function(){
            if ($("#square").delay(50).css('width') === "100px") {
                $("#square").animate({
                    width: "500px",
                },100)
            } else if ($("#square").css('width') === "500px") {
                $("#square").animate({
                    width: "100px",
                },1000)
            }
                
    })
    $(".btnUp").click(function(){
        $("#square").animate({
            bottom: "+=50px"
        })
    });
    $(".btnDown").click(function(){
        $("#square").animate({
            top: "+=50px"
        })
    });
    $(".btnLeft").click(function(){
        $("#square").animate({
            right: "+=50px"
        })
    });
    $(".btnRight").click(function(){
        $("#square").animate({
            left: "+=50px"
        })
    });
})