  const d = document; 
//import soundA from '../assets/alarma.mp3'

export  function digitalClock(clock,btnPlay,btnStop){
let idInterval;
    d.addEventListener("click",(e)=>{

        if(e.target.matches(btnPlay)){
            
            const actualizarHora= ()=>{
                const hora = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h2>${hora}</h2>`;
            }
            actualizarHora()
            idInterval = setInterval(()=>{
                actualizarHora()
            },1000)
           d.querySelector(btnPlay).disabled = true;

        }
        if(e.target.matches(btnStop)){
            d.querySelector(btnPlay).disabled = false;
            clearInterval(idInterval);
            d.querySelector(clock).innerHTML = "";
        }
    })
}
/*
export  function sound(sound,btnPlay,btnStop) {
    //const $alarm = new Audio(soundA)


    
    d.addEventListener("click",(e)=>{
        console.log($alarm)
        if(e.target.matches(btnPlay)){
            setTimeout(()=>{
                $alarm.play();
            },500)
            
           //d.querySelector(btnPlay).disabled = true;

        }
        if(e.target.matches(btnStop)){
            d.querySelector(btnPlay).disabled = false;
        }
    })
    
}
*/