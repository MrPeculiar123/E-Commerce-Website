const darkMode = document.querySelector('.dark-mode');
const logo = document.querySelector(".logo");


darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active_light');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active_light');
    logo.classList.toggle('logo-inverted');
    
    const is_dark = darkMode.querySelector('span:nth-child(2)');

    if(is_dark.classList.contains('active_light')){
        const dark_mode_pref = sessionStorage.setItem("dark_mode", true);
    } 
    else{
        const dark_mode_pref = sessionStorage.setItem("dark_mode", false);
    }

});

// Dark Mode Session Storage



document.addEventListener('DOMContentLoaded', function() {

    if (sessionStorage.getItem('dark_mode') === 'true') {
        document.body.classList.toggle('dark-mode-variables');
        darkMode.querySelector('span:nth-child(1)').classList.toggle('active_light');
        darkMode.querySelector('span:nth-child(2)').classList.toggle('active_light');
        logo.classList.toggle('logo-inverted');

    }

  });




// Image Slider 

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let active = 3;
function loadShow(){
    
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i< items.length ;i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1- 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(3px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
        items[i].style.transition = '0.2s ease-out';
    }
    stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
            items[i].style.transition = '0.2s ease-out';
        }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
previous.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

