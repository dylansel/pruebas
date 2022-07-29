const d = document,
    w = window,
    n = navigator;


export default function webCam(id,errdiv,btnPhoto,btnDownload,canvas) {
    const $video = d.getElementById(id);
    const $errdiv = d.querySelector(errdiv);
    const $canvas = d.querySelector(canvas);
    const $btnD = d.querySelector(btnDownload)
    const context = $canvas.getContext("2d");

    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices
        .getUserMedia({ video: true})
        .then((stream) => { 
            //console.log(stream);
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err => {
            console.error(`Sucedio el siguiente error: ${err}`)
            let $div = d.createElement('div');
            $div.classList.add("errMsg");
            $div.innerText = `Error: "${err.message}"`;
            $errdiv.appendChild($div);
            
        })
    }

    d.addEventListener("click", function(e) {
        if(e.target.matches(btnPhoto)){
            $video.pause();
            $canvas.height = $video.videoHeight;
            $canvas.width = $video.videoWidth;    
            context.drawImage($video,0, 0,$canvas.width, $canvas.height)
            $video.play();
            $btnD.classList.remove("hidden");
        }
        if(e.target ===  $btnD){
            
            let foto = $canvas.toDataURL();
            let enlace = d.createElement("a");
            let now = new Date();
            enlace.download = `Foto Webcam - ${now.toLocaleDateString().replaceAll("/","-")} - ${now.toLocaleTimeString().replaceAll(":","-")}`;
            enlace.href = foto;
            enlace.click();
            
        }


    })

}