// definir tamanho dos botões
let keys = document.querySelectorAll('.key')
let keysX = keys.length
let qtdeDigitos = 0
definirHeightKeys()

function definirHeightKeys() {
    let keysWidth = keys[0].clientWidth
    for (let i in keys) {
        keys[i].style = (`height:${keysWidth}px;`)
    }
}

// efeito click nos botões

for (let x = 0; x < 20; x++) {

    keys[x].addEventListener('click', function () {
        let digiter = document.querySelector('.digiter')
        let numberOne = document.querySelector('.first')
        let numberTwo = document.querySelector('.second')
        let operation = document.querySelector('.operation')
        let numberTeclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let keyboard = document.querySelector('#keyboard').children

        if (keys[x].classList.contains('keyclick')) {
        } else {
            digiter.classList.remove('animate')
            keys[x].classList.toggle('keyclick')
            setTimeout(() => {
                keys[x].classList.toggle('keyclick')
            }, "150");
            setTimeout(() => {
                digiter.classList.add('animate')
            }, "1000")
        }

        for(let y = 0 ; y <10 ; y++){
            if (keys[x].innerText == y) {
                if (operation.innerText.length > 0) {
                    keyboard[2].innerText = (keyboard[2].textContent + y);
                    displayResultadoFast()
                } else {
                    keyboard[0].innerText = (keyboard[0].textContent + y);
                    displayResultadoFast()
                }
    
                verificarQtdeDigitos()
                aguardarDigitosParaCalcular()
            }
        }

        let functionsTeclas = ['%', '/', '*', '-', '+']

        for (let y = 0; y <= 6; y++) {
            if (numberOne.innerText.length == 0) {
    
            } else {
                if (numberTwo.innerText.length == 0) {
                    if (keys[x].innerText == functionsTeclas[y]) {

                        keyboard[1].innerText = (keys[x].innerText)

                        verificarQtdeDigitos()
                        aguardarDigitosParaCalcular()
                    }
                } else {
                    if (keys[x].innerText == functionsTeclas[y]) {
                        numberTwo.innerHTML = ""
                        numberOne.innerHTML = resultado
                        keyboard[1].innerText = (keys[x].innerText)
                        verificarQtdeDigitos()
                        aguardarDigitosParaCalcular()
                        displayResultadoFast()
                    }
                }
            }
        }
        
        aguardarDigitosParaCalcular()
    })
}

//TECLAS DIGITADAS
let allTeclas = ['c', '(', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', ' ', '0', ',', '=']
let numberTeclas = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let functionsTeclas = ['%', '/', '*', '-', '+']
let corpoSite = document.querySelector('body')
let keyboardSection = document.querySelector('#keyboard')
let keyboard = document.querySelector('#keyboard').children
let keyboardQtde = keyboard.children

corpoSite.addEventListener('keyup', function (key) {
    let keyCode = key.key 

    for (let x = 0; x <= 20; x++) {
        if (keyCode == allTeclas[x]) {

            keys[x].classList.add('keyclick')
            setTimeout(() => {
                keys[x].classList.remove('keyclick')
            }, "100")
            digitosMais()
        }
    }



})

//adicionar numeros com teclado
corpoSite.addEventListener('keyup', function (key) {
    let keyCode = key.key
    let numberOne = document.querySelector('.first')
    let numberTwo = document.querySelector('.second')
    let operation = document.querySelector('.operation')

    for (let x = 0; x <= 10; x++) {
        if (keyCode === numberTeclas[x]) {

            if (operation.innerText.length > 0) {
                keyboard[2].innerText = (keyboard[2].textContent + keyCode);
                displayResultadoFast()
            } else {
                keyboard[0].innerText = (keyboard[0].textContent + keyCode);
                displayResultadoFast()
            }

            verificarQtdeDigitos()
            aguardarDigitosParaCalcular()
        }
    }

    for (let x = 0; x <= 6; x++) {
        if (numberOne.innerText.length == 0) {

        } else {
            if (numberTwo.innerText.length == 0) {
                if (keyCode === functionsTeclas[x]) {
                    keyboard[1].innerText = (keyCode)
                    verificarQtdeDigitos()
                    aguardarDigitosParaCalcular()
                }
            } else {
                if (keyCode === functionsTeclas[x]) {
                    numberTwo.innerHTML = ""
                    numberOne.innerHTML = resultado
                    keyboard[1].innerText = (keyCode)
                    verificarQtdeDigitos()
                    aguardarDigitosParaCalcular()
                    displayResultadoFast()
                }
            }
        }
    }

})
function addFunctionsteclas(){
    
}

function resetKetboard() {
    keyboardSection.innerHTML = ('')

    var first = document.createElement('h1');
    first.setAttribute('class', 'first')
    keyboardSection.appendChild(first)

    var operacoes = document.createElement('h1');
    operacoes.setAttribute('class', 'operation')
    keyboardSection.appendChild(operacoes)

    var second = document.createElement('h1');
    second.setAttribute('class', 'second')
    keyboardSection.appendChild(second)

    var divider = document.createElement('div');
    divider.setAttribute('class', 'digiter animate')
    keyboardSection.appendChild(divider)

    digitosZerar()

}


//Botão clear
corpoSite.addEventListener('keyup', function (key) {
    let keyCode = key.key

    if (keyCode == "c") {
        resetKetboard();
        digitosZerar();

    }
});

let buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click', resetKetboard)




// verificar quantidade de digitos

function digitosMais() {
    // console.log('adicionou +1')
    return qtdeDigitos = qtdeDigitos + 1;

}
function digitosMenos() {
    // console.log('removeu 1')
    return qtdeDigitos = qtdeDigitos - 1
}
function digitosZerar() {
    // console.log('zerou')
    return qtdeDigitos = 0
}


let fontSize = "nada";
//verificar QTDE digitos para fonte
function verificarQtdeDigitos() {
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


buttonDel.addEventListener('click', function(){
    deletarUltimoDigito()
    calcular()
    displayResultadoFast()
})

function deletarUltimoDigito() {
    let numberOne = document.querySelector('.first')
    let numberTwo = document.querySelector('.second')
    let operation = document.querySelector('.operation')
    if (numberTwo.innerText.length > 0) {
        deletar(numberTwo)
    } else if (operation.innerText.length > 0) {
        deletar(operation)
    } else (
        deletar(numberOne)
    )

    function deletar(x) {
        x.innerText = x.innerText.substring(0, x.innerText.length - 1)
        digitosMenos()
    }

}


// deletando ao apertar backspace

corpoSite.addEventListener('keydown', function (key) {
    let keyCode = key.key
                if (keyCode == "Backspace") {
                    deletarUltimoDigito()
                    displayResultadoFast()
                    calcular()
                }


});

//verificador instantaneo e resultado


function aguardarDigitosParaCalcular() {
    let numberOne = document.querySelector('.first')
    let numberTwo = document.querySelector('.second')
    let operation = document.querySelector('.operation')

    if (numberOne.innerText.length > 0) {
        if (operation.innerText.length > 0) {
            if (numberTwo.innerText.length > 0) {
                calcular()

            }
        }
    }
}

//calcular
let resultado = 0
function calcular() {

    let numberOne = document.querySelector('.first').innerText
    let numberTwo = document.querySelector('.second').innerText
    let operation = document.querySelector('.operation').innerText

    if (operation == '+') {
        resultado = parseInt(numberOne) + parseInt(numberTwo)
        mostrarResultadoFast()
    }
    if (operation == '-') {
        resultado = parseInt(numberOne) - parseInt(numberTwo)
        mostrarResultadoFast()
    }
    if (operation == '*') {
        resultado = parseInt(numberOne) * parseInt(numberTwo)
        mostrarResultadoFast()
    }
    if (operation == '/') {
        resultado = parseInt(numberOne) / parseInt(numberTwo)
        mostrarResultadoFast()
    }

}
function mostrarResultadoFast() {
    let resultFast = document.querySelector('#result_fast h2')

    resultFast.innerHTML = resultado
}
// setar display do resultado rápido
function displayResultadoFast() {

    let numberTwo = document.querySelector('.second').innerText.length
    let resultFast = document.querySelector('#result_fast h2')
    if (numberTwo == 0) {
        resultFast.classList.add('none')
    } else {
        resultFast.classList.remove('none')
    }
}

// botão igual ou tecla igual
let buttonIgual = document.querySelector('#igual')
buttonIgual.addEventListener('click', mostrarResultado)

function mostrarResultado() {
    let numberOne = document.querySelector('.first')
    let numberTwo = document.querySelector('.second')
    let operation = document.querySelector('.operation')

    if(numberTwo.innerText == ""){

    }else{
        console.log(numberOne.getBoundingClientRect())
        operation.innerHTML = "";
        numberTwo.innerHTML = "";
        numberOne.innerHTML = resultado;
        displayResultadoFast();
    }
}

corpoSite.addEventListener('keyup', function (key) {
    let x = key.key 
    if(x == 'Enter' || x == "="){
        mostrarResultado()
    }
});

//trocando cor do tema
let buttonColorThema = document.querySelector('.button_thema')

buttonColorThema.addEventListener('click', function(){
    let meuHTML = document.querySelector('html')
    meuHTML.classList.toggle('white_mode')

    buttonColorThema.children[0].classList.toggle('none')
    buttonColorThema.children[1].classList.toggle('none')

})