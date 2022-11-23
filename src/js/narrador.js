const d = document,
w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance(); // El objeto que nos permite interactuar con las voces

    console.log(w.speechSynthesis.getVoices())


    let voices = [];

    d.addEventListener("DOMContentLoaded",e=>{
        
        w.speechSynthesis.addEventListener("voiceschanged",e=>{
            voices = w.speechSynthesis.getVoices(); //cargo las voces en el array voces, si o si tiene que estar en este evento listener por que sino no se puede leer

            voices.forEach(voice=>{
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name}  => (${voice.lang})`

                $speechSelect.appendChild($option);
            })
        })
    })
    d.addEventListener("change",e=>{
        if(e.target === $speechSelect){
            speechMessage.voice = voices.find(voice => voice.name === e.target.value) //especifico la voz de la lista de voces que tengo
        }
    })
    d.addEventListener("click",e=>{
        if(e.target === $speechBtn){
            speechMessage.text = $speechText.value; //le paso que va a decir
            w.speechSynthesis.speak(speechMessage); //Hago que lo narre
        }

    })
    
}