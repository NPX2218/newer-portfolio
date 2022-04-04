/////////////////////////////////////////
//Creating the setTheme function, which sets the theme, and also creating the outerColorCursor Color
/////////////////////////////////////////
let outerColorCursor = "#fff";
let checkBox = document.getElementById('switch')

function setTheme(mode, path='src/css/') {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'src/css/default.css'
        outerColorCursor = "#0f1928";
        try{
            checkBox.checked = false;
        }catch(e){
        }
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href = path+'themes/blue.css'
        outerColorCursor = "#fff";
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = path+'themes/green.css'
        outerColorCursor = "#fff";
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = path+'themes/purple.css'
        outerColorCursor = "#fff";
    }

    if(mode == 'dark'){
        document.getElementById('theme-style').href = path+'themes/dark.css'
        outerColorCursor = "#fff";
        try{
            checkBox.checked = true;
        }
    
        catch(e){
        }
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
    
    xp += ((mouseX - xp));
    yp += ((mouseY - yp));
    $(".custom__cursor__outer").css({transform: 'translateX('+ (xp - 15) +'px) translateY('+ (yp - 15) +'px)'}).css({border: '1px solid ' + outerColorCursor})


});

/*setInterval(function(){
    xp += ((mouseX - xp));
    yp += ((mouseY - yp));
    $(".custom__cursor__outer").css({transform: 'translateX('+ (xp - 15) +'px) translateY('+ (yp - 15) +'px)'}).css({border: '1px solid ' + outerColorCursor})
}, 10);*/

