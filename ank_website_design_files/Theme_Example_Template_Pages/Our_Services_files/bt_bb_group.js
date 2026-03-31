(function( $ ) {
	"use strict";
	
	$( '.bt_bb_group' ).each(function() {
		if ( $( this ).data( 'size' ) != '' ) {
			var size = $( this ).data( 'size' );
			$( this ).find( '.bt_bb_group_item' ).attr('data-size', size);
		}
	});
})( jQuery );


