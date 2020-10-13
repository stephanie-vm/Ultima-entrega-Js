
let open=document.getElementById('open');
open.addEventListener('click', () =>{
    let ventana=document.getElementById('vent');
    ventana.classList.add('displayBlock');
    let openOverlay=document.getElementById('overlay');
    openOverlay.classList.add('displayBlock');
});

let close=document.getElementById('close');
close.addEventListener('click',() =>{
    let ventana2=document.getElementById('vent');
    ventana2.classList.remove('displayBlock');
    let openOverlay2=document.getElementById('overlay');
    openOverlay2.classList.remove('displayBlock');
});

