//$(function(){
//    $(".btn1").click(function(){
//        alert("text is: " + $("h1").text());
//    });
//});
//$(function(){
//    $(".btn2").click(function(){
//        alert("HTML is: " + $("h1").html());
//    });
//});

$(function(){
    $(".btn1").click(function(){
        $("h1").text(function(i,origi){
            return origi + "with igneus!"
        });
    });
});


//$(function(){
//    $(".btn3").click(function(){
//        alert("value is: " + $("input").val());
//    });
//});

$(function(){
    $(".btn2").click(function(){
        $("h1").html("<i>i m good at jquery</i>");
    });
});


$(function(){
    $(".btn3").click(function(){
        $("input").val("paris");
    });
});

//$(function(){
//    $(".btn4").click(function(){
//       $("a").attr("href","https://yahoo.com")
//    });
//});
$(function(){
    $(".btn4").click(function(){
       $("a").attr({
           "href":"https://bing.com",
           "title": "going to bing site"
       });
    });
});