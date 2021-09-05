


const bInicio = document.getElementById('bInicio')
const bAboutMe = document.getElementById('bAboutMe')
const bPortafolios = document.getElementById('bPortafolios')
const bContacto = document.getElementById('bContacto')
const Inicio = document.getElementById('page-top')
const AboutMe = document.getElementById('aboutMe')
const Portafolios = document.getElementById('portafolios')
const Contacto = document.getElementById('contacto') 
const portafolio = document.getElementById("box-portafolio")
var respMenuActive = false; 
var Width = screen.width
var Height = screen.height

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
navanimate()






//Preloader
window.onload = () => {
    $('#preloader').fadeOut()
    $('body').removeClass("preloaderScroll")
}

//menu
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
        header.style.transform= "translateY(-20vh)";
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
    sectionAboutMeAnimation()

}


//event listenings
window.addEventListener("scroll",scrollactive );
$('#nav-res').on("click",function(){responsiveMenu()})

let detalleActive= false
portafolio.addEventListener('mouseover',(e)=>{
    console.log("activado")
    
    for(let i=0;i<=document.getElementsByClassName('pbox').length;i++){
          $('.portada-detalle-box-active').removeClass("portada-detalle-box-active")
          $('.portada-detalles-text-active').removeClass("portada-detalles-text-active")
    }
    
    for(let i=0;i<=document.getElementsByClassName('pbox').length;i++){
      if(e.target && e.target.id=='img-box'+(i+1)){
        document.getElementsByClassName('pbox')[i].classList.toggle('portada-detalle-box-active')
        document.getElementsByClassName('portada-detalles')[i].classList.toggle('portada-detalles-text-active')
    }  
    }

    
    
})

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
    let navRes = document.getElementById("nav-res")
    bInicio.style.fontWeight = (InicioTop <= 0 && AboutMeTop >200)?"700":"400";
    bAboutMe.style.fontWeight = (AboutMeTop <= 200 && PortafoliosTop >200)?"700":"400";
    bPortafolios.style.fontWeight = (PortafoliosTop <= 200 && ContactoTop >200)?"700":"400";
    bContacto.style.fontWeight = (ContactoTop <= 200)?"700":"400";
    
}



function responsiveMenu(){
    if( Width >700){return}

    if(respMenuActive === false){
        respMenuActive = true;
        document.getElementById("nav-res").style.transform= "translate(0,0)"
        cambiarVar("white")

    }else if (respMenuActive === true){
        respMenuActive = false
        document.getElementById("nav-res").style.transform= "translate(100vw,0px)"
        navanimate()
        
    }
}

function sectionAboutMeAnimation(){
    
    let AboutMeTop = AboutMe.getBoundingClientRect().top
    let lenguajes = document.getElementById('lenguajes');
    let programas = document.getElementById('programas');
    let lenguajesTop =  lenguajes.getBoundingClientRect().top;
    
    if (AboutMeTop<Height-100){AboutMe.style.transform="translateY(0px)"}
    if (lenguajesTop<Height-200){
        setTimeout(function(){
            lenguajes.style.width="50%";
            setTimeout(function(){
                    programas.style.display="block"
                    setTimeout(function(){
                        programas.classList.add("fade-effect-active")
                        setTimeout(function(){
                        
                            for (let i = 1;i<=8; i++){
                                setTimeout(function(){document.querySelector(".ico"+i).classList.add("fade-effect-active")},i*500)
                            };
                                
                                
                                
                            
                        },200)
                        
                        
                        
                    },200)
                    
            },2000)
        
        },1500)
        

    };

}
