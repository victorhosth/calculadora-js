// definir tamanho dos botões
let keys = document.querySelectorAll('.key')
let keysX = keys.length
let qtdeDigitos = 0
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

        if(keys[x].classList.contains('keyclick')){

        }else{
            digiter.classList.remove('animate')
            keys[x].classList.toggle('keyclick')
            setTimeout(() => {
                keys[x].classList.toggle('keyclick')
              }, "150");
              setTimeout(() => {
                digiter.classList.add('animate')
              }, "1000")

        }

    })
}

//TECLAS DIGITADAS
let allTeclas = ['c', '(', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', ' ', '0', ',', '=']
let numberTeclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let functionsTeclas = ['%', '/', '*', '-', '+']
let corpoSite = document.querySelector('body')
let keyboardSection= document.querySelector('#keyboard')
let keyboard= document.querySelector('#keyboard').children
let keyboardQtde = keyboard.children

corpoSite.addEventListener('keyup', function(key){
    let keyCode = key.key

    for(let x = 0; x <= 20; x++){
        if(keyCode == allTeclas[x]){

            keys[x].classList.add('keyclick')
            setTimeout(() => {
                keys[x].classList.remove('keyclick')
              }, "100")
              digitosMais()
        }
    }


    
})

//adicionar numeros com teclado
corpoSite.addEventListener('keyup', function(key){
    let keyCode = key.key

    for(let x = 0; x <= 10 ; x++){
        if(keyCode === numberTeclas[x]){
            keyboard[0].innerText = ( keyboard[0].textContent + keyCode)
            verificarQtdeDigitos()
        }
    }



})

function resetKetboard(){
    keyboardSection.innerHTML = ('')

    var h1 = document.createElement('h1');
    keyboardSection.appendChild(h1)

    var divider = document.createElement('div');
    divider.setAttribute('class', 'digiter animate')
    keyboardSection.appendChild(divider)

    digitosZerar()

}


//Botão clear
corpoSite.addEventListener('keyup', function(key){
    let keyCode = key.key

    if(keyCode == "c"){
        resetKetboard();
        digitosZerar();
        
    }});

    let buttonClear = document.querySelector('#clear');
    buttonClear.addEventListener('click', resetKetboard)




// verificar quantidade de digitos

function digitosMais(){
    // console.log('adicionou +1')
 return qtdeDigitos = qtdeDigitos +1;

}
function digitosMenos(){
    // console.log('removeu 1')
    return qtdeDigitos = qtdeDigitos -1
}
function digitosZerar(){
    // console.log('zerou')
    return qtdeDigitos = 0
}


let fontSize = "nada";
//verificar QTDE digitos para fonte
function verificarQtdeDigitos(){
    // let h1 = document.querySelectorAll('#keyboard h1')

    // if(qtdeDigitos >= 11 && qtdeDigitos <= 15){
    //     if (fontSize == 'f34'){

    //     }else{
    //         return fontSize = ('f34')
    //         for(let x = 0; x < 10; x++){
    //             h1[x].classList.add('f34')
    //         }

    //     }
        
    // }


}


// button delete 1 a 1

let buttonDel = document.querySelector('.button_delete')

buttonDel.addEventListener('click', deletarUltimoDigito)

function deletarUltimoDigito(){
    let h1 = document.querySelectorAll('#keyboard h1')
    let totalH1 = h1.length -1;
    let ultimoH1 = h1[totalH1]

    ultimoH1.innerText = ultimoH1.innerText.substring(0, ultimoH1.innerText.length -1)

    digitosMenos()
}


// deletando ao apertar backspace

corpoSite.addEventListener('keyup', function(key){
    let keyCode = key.key


    if(keyCode == "Backspace"){deletarUltimoDigito()}


});