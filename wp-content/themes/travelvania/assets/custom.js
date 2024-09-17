jQuery(document).ready(function($) {


    $("<div id='close-enquiry'><i class='fa fa-times' aria-hidden='true'></i></div>").insertBefore('.wp-travel-enquiries-form-wrapper');
    
    $( '#close-enquiry' ).click( function(){
        $( '#wptravel-block-trip-enquiry' ).css( 'display', 'none' );
    } );
    
    $( '#trip-enquiry' ).click( function(){
        $( '#wptravel-block-trip-enquiry' ).css( 'display', 'block' );
    } );
    
    $( '#trip-booking' ).click( function(){
         $(".resp-tab-content").css( "display", "none" );
        $( "#booking" ).closest(".resp-tab-content").css( "display", "block" );
    } );
    
        
    /*------------------------------------------------
                    END JQUERY
    ------------------------------------------------*/
    
    });