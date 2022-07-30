const d = document,
w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]");
    let rep = null;
    w.addEventListener('visibilitychange',(e)=>{
        if(rep){
           (d.visibilityState=="visible")?rep.target.play() : rep.target.pause() 
        }
        
    })
    const cb = (entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.play()
                rep = entry
            }else{
                entry.target.pause()
                rep = null;
            }
           
        })
    }
    const observer = new IntersectionObserver(cb,{
        threshold:0.65
    });

    $videos.forEach(el=>observer.observe(el))



}