
$(window).load(function(){

    var iWindowsSize = $(window).width();
    if (iWindowsSize >=550) { 

            $(window).scroll(function(){
                if( $(window).scrollTop() > 50 ) {
                        $( "header" ).addClass('header-fixed');
                        $( "#logo a" ).addClass('header-fixed');
                        $( ".liens_niveau1" ).addClass('header-fixed');
                        $( "#menu ul" ).addClass('header-fixed');
                        $( ".liens_niveau2" ).addClass('header-fixed');
                } else {
                        $( "header" ).removeClass('header-fixed');
                        $( "#logo a" ).removeClass('header-fixed');
                        $( ".liens_niveau1" ).removeClass('header-fixed');
                        $( "#menu ul" ).removeClass('header-fixed');
                        $( ".liens_niveau2" ).removeClass('header-fixed');
                }
            });      

    };

    if (iWindowsSize  < 860 && iWindowsSize >=550) { 

                $(window).scroll(function(){
                    if( $(window).scrollTop() > 50 ) {
                            $( "header" ).addClass('header-fixed2');
                            $( "#logo" ).addClass('header-fixed2');
                            $( "#menu ul" ).addClass('header-fixed2');
                    } else {
                            $( "header" ).removeClass('header-fixed2');
                            $( "#logo" ).removeClass('header-fixed2');
                            $( "#menu ul" ).removeClass('header-fixed2');
                    }
                });  

        };


    if (iWindowsSize  < 550) { 

        $("#bouton_menu").click(function () {
            $("#menu").toggle();
        });

        $("#menu li").click(function () {
            $("#menu").toggle();
        });

        };



    $(document).ready(function() {
      $("#menu a").click(function() {
        $("#menu a").removeClass("active-link");
        $(this).addClass("active-link"); 
      });
    });

    $('body').scrollspy({ target: '#my-nav' });

            // $(window).scroll(function(){
            //     if( $(window).scrollTop() >= 0 ) {
            //             $('#link-accueil').addClass('active-link');
            //     } 
            //     if( $(window).scrollTop() > 925 ) {
            //         $('#link-article').addClass('active-link');
            //         $('#link-accueil').removeClass('active-link');
            //     }
            //     if( $(window).scrollTop() < 925 ) {
            //         $('#link-article').removeClass('active-link');
            //     }
            //     if( $(window).scrollTop() > 2137 ) {
            //         $('#link-musique').addClass('active-link');
            //         $('#link-article').removeClass('active-link');
            //     }
            //     if( $(window).scrollTop() < 2137 ) {
            //         $('#link-musique').removeClass('active-link');
            //     }

            // });


});



