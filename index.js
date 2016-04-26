function toggleVisibility() {
	 var e = $("#datepicker").toggle();
}

$(function() {
	    $( "#dialog" ).dialog();
	  });
	$(function() {
	    $( "#menu" ).menu();
	  });
	$(function() {
	    $( "#tabs" ).tabs({
			  active: 1
			});
	  }); 
	$(function() {
		$( "#draggable" ).draggable();
		$( "#droppable" ).droppable({
			drop: function( event, ui ) {
				$( this )
				.addClass( "ui-state-highlight" )
					.html( "Eliminado" );            
			}
			
		});
	});  
	$(function() {
		$( "#draggable" ).draggable();
		$( "#droppable" ).droppable({
			drop: function (event, ui) {
                var drag_id = $(ui.draggable).attr("id");
                var targetElem = $(this).attr("id");
                deleteMe = true;            
              $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("Fichero borrado");

            $(ui.helper).remove(); //destroy clone
            $(ui.draggable).remove(); //remove from list

            }
		});
	}); 
	$(function() {
	    $( "#datepicker" ).datepicker();
	  });