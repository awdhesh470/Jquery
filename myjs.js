$(document).ready(function(){
    console.log("Second code is very Good");

    // Jquery Effects
    //hide, show
    $("#btn1").click(function(){
        console.log("click");
        // $("#container").hide();
        $("#container").fadeOut(2000, function(){
            alert("gone");
        });    //slow hide
    });
    $("#btn2").click(function(){
        console.log("click");
        // $("#container").show();
        $("#container").fadeIn();  //slow show
    });

    $("#btn3").click(function(){
        
        // $("#container").show();
        $("#container").fadeToggle();  //show hide same button toggle
    });

    $("#btn4").click(function(){
        $("#container").fadeTo(250,0.5,function(){
     alert("fadeTo");
         //hide less color 0.5
    });
});
    
//slideDown, slideUp, slideToggle
$("#btn6").click(function(){
    $("#container").slideUp(3000,function(){
        alert("SlideUp");   //up
});
});

$("#btn5").click(function(){
    $("#container").slideDown();  //Down 
});

$("#btn7").click(function(){
    $("#container").slideToggle();  //Down 
});

//Animate   ({params},speed,callback)
$("#btn8").click(function(){
   // $("#container").animate({width:"200"},200,function(){  //width change of container
        $("#container").animate({width:"+=200"},200,function(){  //Randomly width change of container
alert("Animate width change");
     //Down 
});
});

//val function

$("#btn9").click(function(){
//    let v= $("#f").val();  //fetch value
//     console.log("value is"+v);

    $("#f").val("this is done uaing function");  //click to val then show this msg in box
});

//Text  (use html text to )


//Also Learn
//Function= append, prepaid, remove, addClass, removeClass, toggleClass, css(), child,siblings()
$("#content").html("<b>this is new content by text()</b>");
});
