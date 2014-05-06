var ultimo;

$(document).ready(function(){
	$.get( "http://localhost:3000/clients.json", function(data) {
	  for (var i = 0; i < data.length; i++) {
	  	var id = data[i].id;
	  	$('body').append('<input type="text" value="'+data[i].nome+'" class="'+id+'"/>');
	  	$('body').append('<br/>');
	  	$('body').append('<input value="'+data[i].email+'" class="'+id+'"/>');
	  	$('body').append('<br/>');
	  	$('body').append('<button value="'+id+'" class="'+id+'">Editar</button>');
	  	$('body').append('<button value="'+id+'" class="'+id+'">Deletar</button>');
	  	$('body').append('<br/>');
	  	ultimo = id;
	  };
	});

	$('#cadastrar').click(function(){
		var nome = $('#nome').val();
		var email = $('#email').val();

		$.post( "http://localhost:3000/clients", { client: { nome: nome, email: email } })
		  .done(function( data ) {
		   	$('body').append('<input type="text" value="'+nome+'" class="'+ultimo+'"/>');
		  	$('body').append('<br/>');
		  	$('body').append('<input value="'+email+'" class="'+ultimo+'"/>');
		  	$('body').append('<br/>');
		  	$('body').append('<button value="'+ultimo+'" class="'+ultimo+'">Editar</button>');
		  	$('body').append('<button value="'+ultimo+'" class="'+ultimo+'">Deletar</button>');
		  	$('body').append('<br/>');
		  });

		$('#nome').val() == '';
		$('#email').val() == '';

		ultimo++;

		return false;
	});
});



$(document).on('click','button',function() {
	var id = $(this).val();

	if($(this).html() == 'Deletar'){
		$('.'+id).hide();
	} else if($(this).html() == 'Editar') {
		console.log('editar');
		var data = JSON.stringify({nome: 'elmano', email: 'elmano'});

		$.ajax({
		    type: "PUT",
		    url: "http://localhost:3000/clients/"+id,
		    contentType: "application/json",
		    data: data
		});
	}
	
});

