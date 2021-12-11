$(document).ready(function(){
    let colorWidth = $(".colorBox").outerWidth();
    $("#optionsBox").animate({left : `-211.531px`} , 0);
    $('.owl-carousel').owlCarousel();
    $("#loading .spinner").fadeOut(1000 , ()=>{
        $("#loading .spinner").parent().fadeOut(1000,()=>{
            $("#loading").remove();
            $("body").css("overflow-y" , "auto")
        })
    });
})


$("#cogbtn").click(function(){
    let colorWidth = $(".colorBox").outerWidth();

    if($("#optionsBox").css("left") == "0px"){
        $("#optionsBox").animate({left : `-${colorWidth}`} , 1000)
    }
    else{
        $("#optionsBox").animate({left : `0`} , 1000)
    }

    // $(".colorBox").toggle("1000");
})

let colorItem = $(".colorItem");
colorItem.eq(0).css("backgroundColor" , "red");
colorItem.eq(1).css("backgroundColor" , "#09c");
colorItem.eq(2).css("backgroundColor" , "lightgreen");
colorItem.eq(3).css("backgroundColor" , "darkblue");
colorItem.eq(4).css("backgroundColor" , "orange");


// var icon = document.getElementsByClassName("nav-icon")
colorItem.click(function(e){
    let bgColor = $(e.target).css("backgroundColor");
    // $("p").css("color" , bgcolor)
//     var style = document.createElement('style');
//     let css = `.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
//         color: ${bgcolor} !important
//       }`
//     if (style.styleSheet) {
//         style.styleSheet.cssText = css;
//     } else {
//         style.appendChild(document.createTextNode(css));
//     }
    
//     document.getElementsByTagName('head')[0].appendChild(style);
//
        $(".nav-icon").hover(function() {

            $(this).css("color" , bgColor);

        }
        , function() {

            $(this).css("color", "#000");  

        });

        $(".navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link").hover(function() {

            $(this).css("color" , bgColor);

        }
        , function() {

            $(this).css("color", "#000");  

        });

        $(".home-mouse").hover(function() {

            $(this).css("color" , bgColor);

        }
        , function() {

            $(this).css("color", "#000");  

        });
        $(".team-social").hover(function() {
            $(".team-social ").css({"backgroundColor" : bgColor});
        }
        , function() {
            $(this).css("color", "#000"); 
        });

        $(".services .item").hover(function() {
            $(".item span ").css({"border" : `8px solid ${bgColor} `});
        });

        $(".progress-bar").css({"backgroundColor" : bgColor});

        $(".text:last-of-type a.btn").hover(function() {
            $(this).css({"borderColor" : bgColor});
        }
        , function() {
            $(this).css("borderColor" , "#a6a6a6"); 
        });

        $("p.Copyright").hover(function() {
            $(this).css({"color" : bgColor});
        }
        , function() {
            $(this).css("color" , "#a6a6a6"); 
        }); 

        $("button").css({"backgroundColor" : bgColor});
        $(".contact .icon i").css({"color" : bgColor});

             
        
})