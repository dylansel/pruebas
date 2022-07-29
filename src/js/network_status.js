const d = document,
w = window,
n = navigator;




export default function networkStatus(){
    const isOnLine = ()=>{
        const $div = d.createElement('div');
        console.log(n.onLine)
        if(n.onLine){
            $div.textContent = 'Conexion Reestablecida';
            $div.classList.add('online');
            $div.classList.remove(`offline`);
        }else{
            $div.textContent = 'Conexion Perdida';
            $div.classList.add('offline');
            $div.classList.remove(`online`);
        }
        d.body.insertAdjacentElement("afterbegin",$div)
        setTimeout(()=>d.body.removeChild($div),5000)

    }
    
    w.addEventListener("online",isOnLine)
    w.addEventListener("offline",isOnLine)

   
    //<div class="offline">Conexion restablecida</div>

}