// definir tamanho dos botões
let keys = document.querySelectorAll('.key')

definirHeightKeys()
console.log('entrou na função')
function definirHeightKeys(){
    let keysWidth = keys[0].clientWidth
    console.log(keysWidth)


    for(let i in keys){
        keys[i].style = (`height:${keysWidth}px;`)
    }
}

