const d =document;

export default function countdown(id,limitDate,finalMessage) {
    const $countdown = d.getElementById(id);
    const countdownDate = new Date(formatDateEsToEn(limitDate)).getTime();

    let countdownTempo = setInterval(() =>{
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime/(1000*60*60*24)),
        hours = ("0"+Math.floor(limitTime%(1000*60*60*24)/(1000*60*60))).slice(-2),
        minutes = ("0"+Math.floor(limitTime%(1000*60*60)/(1000*60))).slice(-2),
        seconds = ("0"+Math.floor(limitTime%(1000*60)/(1000))).slice(-2);
        if(!(limitTime<0)){
            $countdown.innerHTML = `<h3>Faltan: ${days} Dias ${hours} Horas ${minutes} Minutos ${seconds} Segundos</h3>` ;
        }else{
            $countdown.innerHTML = finalMessage ;
            clearInterval(countdownTempo);
        }
        
    },1000)
   
}

function formatDateEsToEn(f){
    f = f.split(' ');
    let hora = f[1];
    let fecha = f[0].split("/");

    return `${fecha[1]}/${fecha[0]}/${fecha[2]} ${hora}`
}