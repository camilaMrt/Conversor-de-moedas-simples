function calcularDolar() {
    let real = document.getElementById("input-real").value
    let dolar = document.getElementById("input-dolar").value
    let resultado = real/dolar
    let valorFixado = resultado.toFixed(2)

    if(real == 0 || dolar == 0) {
        alert('Favor preencher todos os campos.')
    } else {
        dolares.innerHTML = ' $' + valorFixado
    }  
    
    document.getElementById("input-real").value =""
    document.getElementById("input-dolar").value=""

    }