const velocidade = window.prompt("digite a velocidade")
    const multa = velocidade * 3

    if(velocidade <= 40){
        alert("você está em via urbana há " + velocidade + " km")
    } else if((velocidade > 40) && (velocidade <= 80)){
        alert("você está em via estadual há " + velocidade + " km")
    } else if((velocidade > 80) && (velocidade <= 120)) {
        alert("você está em via federal há " + velocidade + " km")
    } else {
        alert("você será multado com o valor de " + multa + " reais")
    }