export  function atajosTeclado(e){
    if(e.ctrlKey && e.altKey && e.key==="a"){ //atajos personalizados
            alert("Se activo un atajo del teclado")
        }
}

let y = 0.5,
    x = 0.5;
export  function ballControler(e,ball,ecenario){
    const d = document;
    const $ball =  d.querySelector(ball);
    const $ecenario =  d.querySelector(ecenario);
    const limitsBall = $ball.getBoundingClientRect()
    const limitsEcenario = $ecenario.getBoundingClientRect()
    
    switch (e.key){
        case "ArrowDown":
            e.preventDefault();
            if(Math.round(limitsBall.bottom)  < Math.round(limitsEcenario.bottom)){
                y++;
            }
            break;
        case "ArrowUp":
            e.preventDefault();
            if(Math.round(limitsBall.top)  > Math.round(limitsEcenario.top)){
                y--;
            }
            break;
        case "ArrowLeft":
            e.preventDefault();
            if(limitsBall.left >= limitsEcenario.left){
                x--;
            }
            break;
        case "ArrowRight":
            e.preventDefault();
            if(limitsBall.right <= limitsEcenario.right){
                x++;
            }
            break;
    }
    $ball.style.transform= `translate(${x*10}px,${y*10}px)`;
        
    
   
}