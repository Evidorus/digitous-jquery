$(document).ready(function(){
    $(".btn").click(function(){
        $("#square").animate({
            position: "fixed",
            right: 0,
            bottom: 0,
        })
    })
})