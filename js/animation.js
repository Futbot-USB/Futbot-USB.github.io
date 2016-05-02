
$(document).ready(function(event){


    $( "#diseno" ).mouseenter(function() {

        $( "#diseno div:last" ).addClass("highlight").css("display","block");
        $('#diseno h5').slideDown(300, 'linear');
        $('#diseno div:last > p').fadeIn(2000);




    }).mouseleave(function() {



        $( "#diseno div:last").removeClass( "highlight" ).css("display","none");
        $('#diseno div:last > p').css('display', 'none');
        $('#diseno h5').css('display', 'none');


    });


    $( "#engranes" ).mouseenter(function() {

        $( "#engranes div:last" ).addClass("highlight").css("display","block");
        $('#engranes h5').slideDown(300, 'linear');
        $('#engranes div:last > p').fadeIn(2000);


    }).mouseleave(function() {

        $( "#engranes div:last").removeClass( "highlight" ).css("display","none");
        $('#engranes div:last > p').css('display', 'none');
        $('#engranes h5').css('display', 'none');

    });

    $( "#trofeo" ).mouseenter(function() {

        $( "#trofeo div:last" ).addClass("highlight").css("display","block");
        $('#trofeo h5').slideDown(300, 'linear');
        $('#trofeo div:last > p').fadeIn(2000);

    }).mouseleave(function() {

        $( "#trofeo div:last").removeClass( "highlight" ).css("display","none");
        $('#trofeo div:last > p').css('display', 'none');
        $('#trofeo h5').css('display', 'none');

    });





});











































