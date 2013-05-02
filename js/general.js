$(function(){
	/*var $menu = $('#menu');
  
	$menu.find('a').click(function(){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});*/
	
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
});