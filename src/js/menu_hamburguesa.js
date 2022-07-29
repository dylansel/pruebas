export default function hamburguerMenu(menuBtn,menu){
   const d = document;
  
   d.addEventListener('click',(e)=>{ 
      if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
         d.querySelector(menu).classList.toggle(`is-Active`)
         d.querySelector(menuBtn).classList.toggle(`is-active`)
      }
      if(e.target.matches(`${menu} *`)){
         d.querySelector(menu).classList.toggle(`is-Active`)
         d.querySelector(menuBtn).classList.toggle(`is-active`)
      }
   })

}


 