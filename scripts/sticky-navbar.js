$(function (){
                var topoffset = 400;
                $(window).scroll(function() {
                        if( $(window).scrollTop() > topoffset ) {
                            
                                $('#navbar').css({position: 'fixed', top: '0px', height: '100px', lineHeight: '100px', fontSize: '1.3em', margin: '8px', borderRadius: '5px', });
                                $('#navbar').css('box-shadow', '1px 3px 4px #555');
                            
                            //make the logo visible
                                $('.logo').css({opacity: '1'});
                            
                            // fix the animated class
                                $('.animated').css({marginLeft: '110px',height: '100px'});
          
                        } else {
                            
                                $('#navbar').css({position: 'static', top: '0px', height: '50px',lineHeight: '50px', fontSize: '1em', margin: '0px', borderRadius: '0px'});
                            $('#navbar').css('box-shadow', '0px 0px 0px #fff');
                            //make the logo invisible
                                $('.logo').css({opacity: '0'});
                            
                        }
                });
          });
