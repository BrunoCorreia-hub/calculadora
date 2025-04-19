function calcular(num){
    const input = document.getElementById('valores');
    input.value += num;
}

function limparInput(){
    document.getElementById('valores').value = '';
}

function soma(){
    const input = document.getElementById('valores').value;
    document.getElementById('valores').value = eval(input)
}