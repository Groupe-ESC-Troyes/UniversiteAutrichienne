$(function(){
	$.localScroll({hash: true});
	$('body').scrollspy({target: '#mainnav', offset: 100});
	
	if ($('input[name="identite"]:checked').length > 0){
		if ($('input[name="identite"]:checked').eq(0).attr('id') === 'candidats'){
			$('#form').slideUp();
			$('#formCandidats').slideDown();
		}
		else {
			$('#formCandidats').slideUp();
			$('#form').slideDown();
		}
	}
	
	$('input[name="identite"]').change(function(){
		if ($(this).attr('id') === 'candidats'){
			$('#form').slideUp();
			$('#formCandidats').slideDown();
		}
		else {
			$('#formCandidats').slideUp();
			$('#form').slideDown();
		}
	});
	
	$('#reservation').submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		
		$(this).find(':submit').attr('disabled', 'disabled').val('Patientez...');
		
		$.post('sender.php', data).success(function(response){
			if (response.error == 1){
				alert('Erreur inconnue, merci de réessayer plus tard');
			}
			else if (response.error == 2){
				alert('Merci de remplir tous les champs');
			}
			else if (response.error == 0){
				$('#formSuccess').slideDown();
			}
		});
	});
});