for(let i = 1; i <= 8; i++){
    document.getElementById(`${i}`).onclick = function(){
        mudaFundo(document.getElementById(`${i}`),document.getElementById(`img${i}`))
    }
}

mudaFundo(document.getElementById("5"))

function mudaFundo(value, img){
    for(let i = 1; i <= 8; i++){
        document.getElementById(`${i}`).style.boxShadow = '0 0 0 0';
        document.getElementById(`${i}`).style.borderLeft = '0px';
        document.getElementById(`${i}`).style.marginTop = '0px';
        document.getElementById(`${i}`).style.marginBottom = '0px';
    }
    
    value.style.boxShadow = '3vw 0 3vw -3vw #0070FF inset';
    value.style.borderLeft = '0.25vw solid #0070FF';
    
    value.style.marginTop = '2vh';
    value.style.marginBottom = '2vh';
}