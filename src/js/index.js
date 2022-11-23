import hamburguerMenu from "./menu_hamburguesa.js";
import {hamburguerScroll} from "./scroll.js";
import {digitalClock} from "./reloj.js";
import {atajosTeclado,ballControler} from "./keyboard_controller.js" 
import countdown from "./countdown.js";
import darkTheme from "./darkTheme.js"
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./responsive-Tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./network_status.js";
import webCam from "./webCam.js";
import getGeolocation from "./geolocalizacion.js";
import { loadCards, search } from "./search.js";
import sorteo from "./sorteo.js";
import slider from "./slider.js";
import scrollSpy from "./scrollSpy.js";
import smartVideo from "./smart-video.js";
import contactFormValidator from "./validaciones_formulario.js";
import speechReader from "./narrador.js";
const d = document;
console.log("holaaaa");
d.addEventListener("DOMContentLoaded",(e)=>{
   console.log("Cargo la pagina")
   hamburguerMenu(".btoMenu",'.menu'); 
   hamburguerScroll("#btnScroll"); 
   darkTheme(".btnDark","dark-mode");
   digitalClock(".reloj","#btoIniciarR","#btoFinalizarR");
   //sound("../assets/alarma.mp3","#btoIniciarA","#btoFinalizarA")
   d.addEventListener("keydown",(e)=>{
      atajosTeclado(e);
      ballControler(e,".ball",".container-ball")
   })
   countdown("contTempori",'26/01/2023 0:00',"Feliz Cumple")

   //responsive desingn
   responsiveMedia("youtube",
   "(min-width:1024px)",
   `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank" rel="noopener noreferrer">Ver video</a>`,
   `<iframe  width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
   responsiveMedia("gmaps",
   "(min-width:1024px)",
   `<a href="https://goo.gl/maps/gQj16wq9CavfZWP77" target="_blank" rel="noopener noreferrer">Ver Mapa</a>`,
   `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167132768483!2d-58.383759086000374!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1658890363088!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);


   
   responsiveTester("responsive-tester")
   userDeviceInfo("user-device")
   getGeolocation("geo-container")
   loadCards(".contCards")
   search("search",".card")
   sorteo("inputSorteo",".btnSorteo",".cont-ganador")
   slider();
   scrollSpy();
   smartVideo();
   contactFormValidator();
})
d.addEventListener("click", function(e) {
   if(e.target.matches("#btnActivarWebcam")){
      d.getElementById("btnActivarWebcam").style.display = "none"
      webCam("webcam","#webcamErr","#btnPhoto","#btnDownload","#canvasPhoto");
   }
})

networkStatus();
speechReader();

//parte de PWA que llamo al archivo SW, service worked

if ('serviceWorker' in navigator) {
   console.log('registro')
   navigator.serviceWorker.register('../PWA/sw.js')
     .then(reg => console.log('Registro de SW exitoso', reg))
     .catch(err => console.warn('Error al tratar de registrar el sw', err))
 }
