$(document).ready(function(){
    $("#button_01").click(function(){
        $("p").hide(500)
    })
    $("#button_02").click(function(){
        $("#p_03").hide()
    })
    $("#button_03").click(function(){
        $(".cp_01").hide()
    })
    $("#button_04").click(function(){
        $("p").show()
    })
    $("#button_05").click(function(){
        $(".a").toggle()
    })

    $("#ul_btn_1").click(function(){
        $("ul li:first").css("font-size","50px")
    })
    $("#ul_btn_2").click(function(){
        $("li:even").css("color","red") 
    })
    $("#ul_btn_3").click(function(){
        $("li:odd").css("color","green") 
    })
    $("#ul_btn_4").click(function(){
        $(":button").width("300px")
    })
})