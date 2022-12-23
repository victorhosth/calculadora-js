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

for(let x = 0 ; x < 20 ; x ++ ){

    keys[x].addEventListener('click', function(){
        let digiter = document.querySelector('.digiter')

        digiter.classList.remove('animate')

        keys[x].classList.toggle('keyclick')
            setTimeout(() => {
                keys[x].classList.toggle('keyclick')
              }, "150")

              setTimeout(() => {
                digiter.classList.add('animate')
              }, "1000")

    })

}


//TECLAS DIGITADAS
let teclasTelaArray = ['c', '(', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', ' ', '0', ',', '=']
let corpoSite = document.querySelector('body')

corpoSite.addEventListener('keyup', function(key){

    let keyCode = key.key

    for(let x = 0; x <= 20; x++){
        if(keyCode == teclasTelaArray[x]){
            console.log(`você apertou a tecla: ${teclasTelaArray[x]}`)
            keys[x].classList.toggle('keyclick')
            setTimeout(() => {
                keys[x].classList.toggle('keyclick')
              }, "150")
        }
    }
})