/////////////////////////////////////////
//Loads once the window is fully loaded
/////////////////////////////////////////

$(window).ready(function(){

	/////////////////////////////////////////
	//Creating the local storage for the theme
	/////////////////////////////////////////

	//let theme = localStorage.getItem('theme')
	let profileImage = document.getElementById('profile_pic')
	let hiddenMode = document.getElementById('hidden-modes')
	let theme = sessionStorage.getItem('theme')
	let toggle = document.getElementById('toggle')
	let personalizeText = document.getElementById('personalizeTheme')
	if(theme == null){
		setTheme('light')
	}else{
		setTheme(theme)
	}

	profileImage.addEventListener('click', function(){
		hiddenMode.style.display = "flex";
		personalizeText.innerHTML = "(Secret) Personalize Theme"
		toggle.style.display = "none";
		checkBox.style.display = "none";
	})

	checkBox.addEventListener('click', function(){
		if(checkBox.checked){
			setTheme('dark')

		}else{
			setTheme('light')
		}
		})

	let themeDots = document.getElementsByClassName('theme-dot')

	for (var i=0; themeDots.length > i; i++){
		themeDots[i].addEventListener('click', function(){
			let mode = this.dataset.mode
			console.log('Option clicked:', mode)
			setTheme(mode)
		})
	}
})
