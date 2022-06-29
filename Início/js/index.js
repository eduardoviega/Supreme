for(let i = 1; i <= 4; i++){
    document.getElementById(`${i}`).onclick = function(){
        mudaFundo(document.getElementById(`${i}`),document.getElementById(`id${i+i}`))
    }
}

mudaFundo(document.getElementById("2"))

function mudaFundo(value, fundo){
    for(let i = 1; i <= 4; i++){
        document.getElementById(`${i}`).style.backgroundColor = 'transparent';
        document.getElementById(`id${i+i}`).style.backgroundColor = 'transparent';
    }
    
    fundo.style.backgroundColor = '#28345E';

    value.style.backgroundColor = '#28345E';
    value.style.borderRadius = '15px';
}