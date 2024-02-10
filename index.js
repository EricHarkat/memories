const btns = document.querySelectorAll('.btn')

let list = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]

function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}


btns_reverse = Array.from(btns).reverse()
randomize(list)
for (let index = 0; index < btns_reverse.length; index++) { 
    let btn = btns_reverse[index];
        btn.textContent = list[index]
}
let carte = ""
let carteDetail = ""
let lastCarte = ""
let lastCarteDetail = ""

btns.forEach((elm) =>{
    elm.addEventListener("click",(e)=>{
        console.log("click")
        console.log( + carteDetail)
        console.log( +lastCarteDetail)
        carte = elm.textContent
        carteDetail = elm
        carteDetail.classList.add("visible")
        carteDetail.classList.remove("btn")
        console.log('id ' + lastCarte.id)
        
        if(lastCarte.textContent == carte && lastCarte.id != elm.id ){
            console.log("victory")
            carteDetail.style.background = 'green'
            lastCarteDetail.style.background = 'green'
            
            carteDetail.classList.add("finded")
            lastCarteDetail.classList.add("finded")
            
        }else if(lastCarte.textContent != carte && lastCarte !=""){
            console.log("perdu")
            console.log(carteDetail)
            console.log(lastCarteDetail)
            clearBoard()        
        }
        lastCarte = elm
        lastCarteDetail = carteDetail
    
    })
 })

function clearBoard() {
    setTimeout(() => {
        let visibles = document.querySelectorAll(".visible")
        for (const iterator of visibles) {
            iterator.classList.remove("visible")
            iterator.classList.add("btn")
        }
    }, 1000);
}