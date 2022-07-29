const d = document;
const random = (min,max) =>Math.round(Math.random() * (max - min) + min);


export default function sorteo(idInput,btnSortear,cGanador){
    const $input = d.getElementById(idInput);
    const $cGanador = d.querySelector(cGanador);
    d.addEventListener("click",(e) =>{
        if(e.target.matches(btnSortear)){
            console.log("activado")
            console.log($input.value)
            let opciones = $input.value.split(",");
            let ganador = opciones[random(1,opciones.length)-1];
            console.log(ganador)
            $cGanador.innerText = `El ganador es: ${ganador}`
        }
    })
}