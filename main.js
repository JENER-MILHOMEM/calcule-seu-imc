//caputura o evento de subimit do form

const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputpeso = e.target.querySelector('#peso')
    const inputaltura = e.target.querySelector('#altura')
    const peso = Number(inputpeso.value)
    const altura = Number(inputaltura.value)
    if (!peso){
        setResultado('peso invalido', false)
        return
    }
    if (!altura){
        setResultado('altura invalido', false) } 
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `seu imc é ${imc} (${nivelImc}).`;
    console.log(msg)
    setResultado(msg, true);
})
function getNivelImc(imc){
    const nivel = ['abaixo do peso', 'peso normal', 'sobre peso','obesidade grau1' , 'obesidade grau 2', 'obesidade grau 3']
    if (imc >= 39.9){
    return nivel[5]
    }
    if (imc >= 34.9){
    return nivel[4]
    }
    if (imc >= 29.9){
    return nivel[3]
    }
    if (imc >= 24.9){
    return nivel[2]
    }
    if (imc >= 18.5){
    return nivel[1]
    }
    if(imc < 18,5){
    return nivel[0]
    }
}
function getImc(peso, altura){
    const imc = peso / altura ** 2; 
    return imc.toFixed(2);}

function criaP () {
    const p = document.createElement('p');
    return p;
}

   
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';//aqui é oq vai aparecer no paragravo abaixo do resultado   
    //agora ele adicionou no local de resultado q não tem nada, ele de um siguinificado 
    
    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } 
    else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}