for(let i = 1; i <= 4; i++){
    document.getElementById(`${i}`).onclick = function(){
        mudaFundo(document.getElementById(`${i}`))
    }
}

mudaFundo(document.getElementById("2"))

function mudaFundo(value){
    for(let i = 1; i <= 4; i++){
        document.getElementById(`${i}`).style.backgroundColor = 'transparent';
    }

    value.style.backgroundColor = '#28345E';
}