let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del deasafío';

function alertFunction() {
    alert('Este botón fue clicado');
}
function alertFunctionCiudad() {
    CiudadMexico=prompt('Indica una Ciudad de México:');
    alert(`Estuve en ${CiudadMexico} y me acordé de ti`);
}
function alertFunctionAlerta() {
    alert('Yo amo JavaScript');
}
function alertFunctionSuma() {
    Numero1=parseInt(prompt('Indica el primer número:'));
    Numero2=parseInt(prompt('Indica el segundo número:'));
    ResultadoSuma=Numero1+Numero2;
    ResultadoFactorial= parseInt(factorial(Numero1));
    alert(`El resultado de la suma es ${ResultadoSuma} y 
    el factorial del primer numero es ${ResultadoFactorial}`);
}
function factorial(numero){
    let resultado=1;
    if (numero==0){
        resultado=1;
    }else{
        for (let i= 1 ; i <= numero; i++){
            resultado=i*resultado;
        }
    }
    return resultado;
    console.log(resultado);
}