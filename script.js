//Waits for window to be ready
$(window).ready(function(){

	/////////////////////////////////////////
	//Creating the local storage for the theme
	/////////////////////////////////////////

	//let theme = localStorage.getItem('theme')
	let theme = sessionStorage.getItem('theme')

	if(theme == null){
		setTheme('light')
	}else{
		setTheme(theme)
	}

	let themeDots = document.getElementsByClassName('theme-dot')

	for (var i=0; themeDots.length > i; i++){
		themeDots[i].addEventListener('click', function(){
			let mode = this.dataset.mode
			console.log('Option clicked:', mode)
			setTheme(mode)
		})
	}

	var outerColorCursor = "";
	function setTheme(mode){

		if(mode == 'light'){
			document.getElementById('theme-style').href = 'default.css'
			outerColorCursor = "#0f1928";
		}

		if(mode == 'blue'){
			document.getElementById('theme-style').href = 'css/themes/blue.css'
			outerColorCursor = "#fff";
		}

		if(mode == 'green'){
			document.getElementById('theme-style').href = 'css/themes/green.css'
			outerColorCursor = "#fff";
		}

		if(mode == 'purple'){
			document.getElementById('theme-style').href = 'css/themes/purple.css'
			outerColorCursor = "#fff";
		}

		sessionStorage.setItem('theme', mode);
		//localStorage.setItem('theme', mode)
	}

	/////////////////////////////////////////
	//Movement for custom cursor
	/////////////////////////////////////////
			
		let mouseX = 0;
		let mouseY = 0;
		let xp = 0;
		let yp = 0;

		$(document).mousemove(function(e){
		$(".custom__cursor__inner").css({
			transform: 'translate(' + (e.clientX - 3.25) + 'px, ' + (e.clientY - 3.25) + 'px)'
		});

		mouseX = e.clientX - 10;
		mouseY = e.clientY - 10;
		});

		setInterval(function(){
		xp += ((mouseX - xp));
		yp += ((mouseY - yp));
		$(".custom__cursor__outer").css({transform: 'translateX('+ (xp - 15) +'px) translateY('+ (yp - 15) +'px)'}).css({border: '1px solid' + outerColorCursor})
		}, 10);
})
