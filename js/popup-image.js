/* 
Author Esgi Dendyanri
Youtube.com/DyFountain
Facebook.com/DyFountain
*/
$(document).ready(function(){
    $.fn.esgi = function(maxwidth) {
		//if(!maxwidth) maxwidth='1280px';
		if(!maxwidth) maxwidth=window.innerWidth-100;
		if($('#esgiback').length==0){
			var html="<div id='esgiback'><div id='esgipopupimage'><a class='close'>&#9932;</a><img src=''/></div></div>";
			$('body').append(html);
		}
		$('#esgiback').hide();
		$('#esgiback').css({
			'position': 'fixed',
			'background': 'rgba(0, 0, 0, 0.5)',
			'top': '0',
			'left': '0',
			'bottom': '0',
			'right': '0',
			'z-index': '499',
			'overflow-y': 'auto',
			'padding': '10px',
		});
		$('#esgipopupimage').css({
			'position': 'relative',
			'background': '#fff',
			'width': '100%',
			'height': 'auto',
			'max-width': maxwidth,
			'top': '0',
			'z-index': '9999',
			'line-height': '0',
			'dispay' :'block',
			'margin' : '0 auto',
			'box-shadow' : '0 0 6px #000',
	
		});
		$('#esgipopupimage img').css({
			'width': '100%'
		});
		$('#esgipopupimage .close').css({
			'background': '#fff',
			'border-radius': '21px',
			'padding': '7px',

			'position': 'absolute',
			'top': '0',
			'right': '0',
			'z-index': '2',
			'line-height': '0.926em',
			'padding' : '4px',
			'margin' : '3px',
			'border' : '1px solid #888',
			'box-shadow' : '0 0 3px #000',
		});
        this.click(function(event){
			event.preventDefault();
			$('#esgipopupimage img').attr('src', $(this).attr('href'));
			$('body').css({
				'position': 'relative',
				'overflow': 'hidden'
			});
			$('#esgiback').show();
		});
		$( document ).on( 'click', '#esgiback', function() {
			$('body').attr('style','');
			$('#esgiback').hide();
			$('#esgipopupimage img').attr('src','');
		}).on( 'click', '#esgipopupimage .close', function() {
			$('#esgiback').trigger('click');
		}).on( 'click', '#esgiback #esgipopupimage', function(e) {
			return false;
		});
        return this;
    };
 
});