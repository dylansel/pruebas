const d = document;
const ls = localStorage;
let isActiveDark = false;


export default function darkThem(btnDark,classDark){
    const $btnDark = d.querySelector(btnDark);
    const $selectors = d.querySelectorAll("[data-dark]")
    const darkMode= () => {$selectors.forEach((el)=>{el.classList.add(classDark)})}
    const lightMode= () =>{$selectors.forEach((el)=>{el.classList.remove(classDark)})}
    const changeMode = () =>{
    if(isActiveDark){
        darkMode()
        isActiveDark = true;
    }else{
        lightMode()
        isActiveDark = false;
    }
    $btnDark.innerHTML = `<i class="flecha fa-solid fa-${(isActiveDark)?"moon":"sun"}"></i>`
    ls.setItem("theme",isActiveDark)
    }
    //local storage
    if(ls.getItem("theme")==null){
        ls.setItem("theme","false")
        isActiveDark = false;
    }else{
        isActiveDark = (ls.getItem("theme")=="true") 
    }
    changeMode()
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnDark)|| e.target.matches(`${btnDark} *`)){
            isActiveDark=!isActiveDark
            changeMode()
        }
    })
}