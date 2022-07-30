const d = document,
w = window;

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries)=>{
        entries.forEach((entry)=>{
            const id = entry.target.id
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
            }
        })
    }
    const observer = new IntersectionObserver(cb,{ 
        //root 
        //rootMargin:"-250px", // Al ponerlo en negativo bajo la amplitud que va a leer si se ve en pantalla
        threshold:[0.50,0.75] //no va a darlo como leido si no tiene al menos un 0.5 = 50% del contenido en pantalla 
    });

    $sections.forEach(el=>observer.observe(el));

} 