// definir tamanho dos botões
let keys = document.querySelectorAll('.key')

definirHeightKeys()

function definirHeightKeys(){
    let keysWidth = keys[0].clientWidth
    for(let i in keys){
        keys[i].style = (`height:${keysWidth}px;`)
    }
}

// efeito click nos botões

for(let i in keys){

    keys[i].addEventListener('click', function(){

        


        keys[i].classList.toggle('keyclick')
            setTimeout(() => {
                keys[i].classList.toggle('keyclick')
              }, "150")

    })

}