// definir tamanho dos botões
let keys = document.querySelectorAll('.key')

definirHeightKeys()

function definirHeightKeys(){
    let keysWidth = keys[0].clientWidth
    for(let i in keys){
        keys[i].style = (`height:${keysWidth}px;`)
    }
}

