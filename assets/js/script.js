// definir tamanho dos botões
let keys = document.querySelectorAll('.key')
let keysX = keys.length

definirHeightKeys()

function definirHeightKeys(){
    let keysWidth = keys[0].clientWidth
    for(let i in keys){
        keys[i].style = (`height:${keysWidth}px;`)
    }
}

// efeito click nos botões

for(let i = 0 ; i <= keysX; i ++ ){

    keys[i].addEventListener('click', function(){
        let digiter = document.querySelector('.digiter')

        digiter.classList.remove('animate')
        keys[i].classList.toggle('keyclick')

            setTimeout(() => {
                keys[i].classList.toggle('keyclick')
              }, "150")
              setTimeout(() => {
                digiter.classList.add('animate')
              }, "1000")

    })

}