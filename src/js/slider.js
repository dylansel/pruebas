const d = document;



export default function(){
    const $nextBtn = d.querySelector(".btnSlider-next"),
    $prevBtn = d.querySelector(".btnSlider-prev"),
    $slides = d.querySelectorAll(".slider-slide")

    let i = 0;
    const nextSlider = ()=>{
        $slides[i].classList.remove("slider-slide-active")
        i--;
        if(i<0)i=$slides.length -1;
        $slides[i].classList.add("slider-slide-active")
    }
    const prevSlider = ()=>{
        $slides[i].classList.remove("slider-slide-active")
        i++;
        if(i>=$slides.length)i=0;
        $slides[i].classList.add("slider-slide-active")
    }

    
    d.addEventListener("click",e=>{

        if(e.target ==  $nextBtn || e.target.matches(`.${$nextBtn.className} *`))nextSlider();
        if(e.target ==  $prevBtn || e.target.matches(`.${$prevBtn.className} *`) )prevSlider();
    })

    setInterval(nextSlider,5000);


}