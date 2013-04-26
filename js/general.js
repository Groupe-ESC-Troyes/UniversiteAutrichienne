$(function(){
	/*var $menu = $('#menu');
  
	$menu.find('a').click(function(){
		$menulink.toggleClass('active');
		$menu.toggleClass('active');
	});*/
	
	$.localScroll({hash: true});
	$('body').scrollspy({target: '#mainnav', offset: 100});
});