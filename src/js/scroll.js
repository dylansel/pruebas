
const d = document,
 w = window;
export function hamburguerScroll(btn) {
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll',(e)=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop>300){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }
        
    })


    
    d.addEventListener('click',(e)=>{ 
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
          $scrollBtn.firstChild.nextSibling.classList.add("flecha-animation-press")
          setTimeout(() =>$scrollBtn.firstChild.nextSibling.classList.remove("flecha-animation-press"),4000)
          w.scrollTo({
            behavior: "smooth",
            top: 0,
          })
        }
     })



    $scrollBtn.addEventListener("mouseover",()=>{
        $scrollBtn.firstChild.nextSibling.classList.add("flecha-animation")
    })
    $scrollBtn.addEventListener("mouseout",()=>{
        $scrollBtn.firstChild.nextSibling.classList.remove("flecha-animation")
    })

    
}