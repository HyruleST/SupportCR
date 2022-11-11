let menu = document.querySelector('.nav-menu');
let barras = document.querySelector('.menu-barras')
let move = true; 
let mode = true;
let manu1 = document.querySelector('#pre1');
let manu2 = document.querySelector('#pre2');
let manu3 = document.querySelector('#pre3');
let manu4 = document.querySelector('#pre4');
let principal = document.querySelector('#principal');
let bienvenido = document.querySelector('#bien');
let nosotros = document.querySelector('#nosos');
let menuales = document.querySelector('#manus');
let secNoso = document.querySelector('#noso');
let secHero = document.querySelector('#hero');
let secManu = document.querySelector('#manu');
let secFoot = document.querySelector('#foot');
let body = document.body;
let darkMode = document.querySelector('#night')


function mover(){
    menu.style.left = '-100%';
    menu.style.transition = '1s';
    move = true;
};

barras.addEventListener('click', (event)=>{
    if (move == true){
        menu.style.left = '0%';
        menu.style.transition = '1s';
        move = false;
    }else{
        mover()
    };
});

darkMode.addEventListener('click', (event) =>{
    let modeSerius = body.classList.toggle("dark");
    localStorage.setItem("modo",modeSerius);
    if (mode == true){
       darkMode.innerHTML = "dark_mode";
    mode = false;
    }else{
        darkMode.innerHTML = "light_mode";
        mode = true;
    };

});


let modeValor = localStorage.getItem("modo")
if(modeValor == "true"){
    body.classList.add("dark")
}else{
    body.classList.remove("dark")
}

bienvenido.addEventListener('click',event => mover());
nosotros.addEventListener('click',event => mover());
menuales.addEventListener('click',event => mover());
secNoso.addEventListener('click',event => mover());
secHero.addEventListener('click',event => mover());
secManu.addEventListener('click',event => mover());
secFoot.addEventListener('click',event => mover());
manu1.addEventListener('click', event => window.location.href = "./html/Guia de desensamble.html")
manu2.addEventListener('click', event => window.location.href = "./html/Guia de ensable.html")
manu3.addEventListener('click', event => window.location.href = "./html/Seleccion de componentes.html")
manu4.addEventListener('click', event => window.location,href ="./html/Instalacion de sistema operativo.html")
