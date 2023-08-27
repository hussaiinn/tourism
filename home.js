let navv = document.getElementById('container1')
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        navv.style.backgroundColor = 'white';
        navv.style.transition = 'all 0.5s';
    }
    else{
        navv.style.backgroundColor = 'transparent';
    }
}

