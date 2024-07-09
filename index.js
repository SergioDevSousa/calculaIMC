function calcularIMC (){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(altura) || isNaN(peso)) {
        alert('Por favor, insira valores válidos para altura e peso.');
        return;
    }
    const imc = peso/(altura * altura);
    let classificacao = "";

    if (imc < 18.5 ){
        classificacao = "Abaixo do Peso";
    } else if ( imc < 18.5 && imc < 24.9){
        classificacao = "Eutrofia Peso Adequado";
    } else if ( imc < 25 && imc < 29.9){
        classificacao = "Sobrepeso";
    } else if ( imc < 30 && imc < 34.9){
        classificacao = "Obesidade G1";
    } else if ( imc < 35 && imc < 39.9){
        classificacao = "Obesidade G2";
    } else{
        classificacao = "Obesidade Extrema";
    }
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}
