const menubut  = document.getElementById('menu')
const nav = document.getElementById('nav')
let num = 1

function openmenu(){
    if (num == 0){
        nav.style.display = 'block';
        num = num + 1;
    }
    else if (num == 1){
        nav.style.display = 'none';
        num = num-1
    }

}

menubut.addEventListener("click",openmenu)