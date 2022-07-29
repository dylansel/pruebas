const d = document,
n = navigator;

export function loadCards(container){
    const $containerCards = d.querySelector(container);
    const cardsOpcions = ["animals","Architecture","nature","people","any","tech","grayscale","sepia"];
    cardsOpcions.forEach((carN)=>{
        $containerCards.innerHTML += `
            <div class="card">
                <img src="https://placeimg.com/200/200/${carN}" alt="${carN}">
                <p>${carN}</p>
            </div>
        `
    })
}

export function search(idSearch,selector){
    const $search = d.getElementById(idSearch);
    $search.addEventListener("input",(e)=>{
        console.log(e.target.value)
        d.querySelectorAll(selector).forEach(el=>{ 
            (el.children[1].textContent.toLowerCase().includes(e.target.value.toLowerCase()))?
            el.classList.remove("filter"):el.classList.add("filter");
        })
    })
    

}