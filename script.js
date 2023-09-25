function iniciar(){
    let contador = 0

    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('incrementar').style.display = 'inline';
    document.getElementById('reiniciar').style.display = 'inline';
    document.getElementById('decrementar').style.display = 'inline';

    document.getElementById('contador').innerHTML = contador

}

function decrementar(){
    let contador = document.getElementById('contador')
    let valor = Number(contador.textContent)
    valor--
    document.getElementById('contador').innerHTML = valor
    color()
}

function incrementar(){
    let contador = document.getElementById('contador')
    let valor = Number(contador.textContent)
    valor++
    document.getElementById('contador').innerHTML = valor
    color()
}

function reiniciar(){
    document.getElementById('contador').innerHTML = '0'
    color()
}

function color (){
    let contador = document.getElementById('contador')
    let valor = Number(contador.textContent)
    if(valor > 0){
        contador.style.color = 'green'
    } else if(valor < 0){
        contador.style.color = 'red'
    } else{
        contador.style.color = 'black'
    }
}