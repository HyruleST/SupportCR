let menu = document.querySelector('.nav-menu');
let barras = document.querySelector('.menu-barras')
let hola = true; 
let manu1 = document.querySelector('#pre1');
let manu2 = document.querySelector('#pre2');
let manu3 = document.querySelector('#pre3');
let manu4 = document.querySelector('#pre4')
barras.addEventListener('click', (event)=>{
    if (hola == true){
        menu.style.left = '0%';
        menu.style.transition = '1s';
        hola = false;
    }else{
        hola = false;
        menu.style.left = '-100%';
        menu.style.transition = '1s';
        hola = true;
    };
});

manu1.addEventListener('click', event => window.location.href = "./html/Guia de desensamble.html")
manu2.addEventListener('click', event => window.location.href = "./html/Guia de ensable.html")
manu3.addEventListener('click', event => window.location.href = "./html/Seleccion de componentes.html")
manu4.addEventListener('click', event => window.location,href ="./html/Instalacion de sistema operativo.html")
