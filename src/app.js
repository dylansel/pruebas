

const bInicio = document.getElementById('bInicio')
const bAboutMe = document.getElementById('bAboutMe')
const bPortafolios = document.getElementById('bPortafolios')
const bContacto = document.getElementById('bContacto')
const Inicio = document.getElementById('page-top')
const AboutMe = document.getElementById('aboutMe')
const Portafolios = document.getElementById('portafolios')
const Contacto = document.getElementById('contacto') 
var respMenuActive = false; 
//dark - Light mode
var darkmode = false
const change_dark_light = (change) =>{
    
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let icon = document.querySelector(".icon-dark-light")
    if (change){
        if(darkmode){
            darkmode = false
            icon.innerHTML = '<i class="fas fa-moon nav_a" title="Activar modo oscuro"></i>'
            document.body.classList.remove("dark-theme");
        }else{
            darkmode = true
            icon.innerHTML = '<i class="fas fa-sun nav_a" title="Activar modo claro"></i>'
            document.body.classList.add("dark-theme");
        }
        
    }else{
        if (userPrefersDark) {
            darkmode = true
            icon.innerHTML = '<i class="fas fa-sun nav_a" title="Activar modo claro"></i>'
            document.body.classList.add("dark-theme");
        }else{
            darkmode = false
            icon.innerHTML = '<i class="fas fa-moon nav_a" title="Activar modo oscuro"></i>'
            document.body.classList.remove("dark-theme");
        }
            
    }
    scrollactive()
}

change_dark_light()







//Preloader
window.onload = () => {
    $('#preloader').fadeOut()
    $('body').removeClass("preloaderScroll")
}

var ante 
function navanimate() {
    let top = document.getElementById("page-top");
    let posicion_top = top.getBoundingClientRect().top;
    let posicion_aboutMe = document.getElementById("aboutMe").getBoundingClientRect().top
    let header = document.getElementById("header")
    
    let oculto = false
    let activo = false
    if(posicion_aboutMe < 60 && oculto == false ){ 
        header.style.transition=' color 1s, background  0.6s, height 0.2s, backdrop-filter 0.2s, transform .5s';
        header.style.transform= "translateY(-70px)";
        cambiarVar("var(--primary-font)")
        oculto = true
        activo = true
    }
    if (ante < posicion_aboutMe && oculto == true) {
        header.style.transition=' color 1s, background  0.6s, height 0.2s, backdrop-filter 0.2s, transform 0.3s';
        header.style.transform= "translateY(0px)";
        cambiarVar("var(--primary-font)")
        oculto = false
        activo = true
    }

if (activo == false) {

if (posicion_top < 0 ){
        header.style.backdropFilter = "blur(4px)";
        header.style.boxShadow= "0 0 10px black";
        cambiarVar( darkmode?"var(--primary-font)":"var(--secundary-font)")
    }else{
        header.style.backdropFilter = "blur(0px)";
        header.style.boxShadow= "0 0 0px black";
        
        cambiarVar( darkmode?"var(--primary-font)":"var(--secundary-font)")
    }

}
    

    ante = posicion_aboutMe
}



function scrollactive() {
    if(!respMenuActive ){navanimate()}
    sectionNavOn()
}

window.addEventListener("scroll",scrollactive );
function cambiarVar(color){
        
        var all = document.getElementsByClassName("nav_a");
        
        for (var i = 0; i < all.length; i++) {
          all[i].style.color = `${color}`;
        }
}

//menu nav on configurate



function sectionNavOn(){
    let InicioTop = Inicio.getBoundingClientRect().top;
    let AboutMeTop = AboutMe.getBoundingClientRect().top
    let PortafoliosTop = Portafolios.getBoundingClientRect().top;
    let ContactoTop = Contacto.getBoundingClientRect().top;
    bInicio.style.fontWeight = (InicioTop <= 0 && AboutMeTop >200)?"700":"400";
    bAboutMe.style.fontWeight = (AboutMeTop <= 200 && PortafoliosTop >200)?"700":"400";
    bPortafolios.style.fontWeight = (PortafoliosTop <= 200 && ContactoTop >200)?"700":"400";
    bContacto.style.fontWeight = (ContactoTop <= 200)?"700":"400";
    
}
   
function responsiveMenu(){
    if(screen.width >700){return}

    if(respMenuActive === false){
        respMenuActive = true;
        document.getElementById("nav-res").style.transform= "translate(0,0)"
        

    }else if (respMenuActive === true){
        respMenuActive = false
        document.getElementById("nav-res").style.transform= "translate(100vw,0px)"
        
        
    }
}

