window.onload = function(){
    let h1 = document.getElementsByClassName("squad")
    let butt = document.getElementById("press")
    let butto = document.getElementById("pressi")
    console.log(h1)
    console.log(butt)
    
    butt.addEventListener("click", vermelho)
    butto.addEventListener("click", vermelho)

    function vermelho(){
        console.log(h1)
        document.body.style.backgroundColor = "red";
    }
}
//    pega esse h1 e colocar no l1 e chamar uma fuction apos o click
l1 = document.getElementById("primeiro")
//    r1.onclick = mudarText;
l1.onclick = mudarCor;   //se eu quiser muda a cor

//    function mudarText(){
//        this.innerHTML = "Novo Texto";  //se quiser muda o texto
//    }

// pega esse h1 e colocar no l2 3 4 5 e chamar uma fuction apos o click
l2 = document.getElementById("segundo")
l2.onclick = mudarCor2; // alem de onclick existem varios tipo onmouseover onmouseout

l3 = document.getElementById("terceiro")
l3.onclick = mudarCor3;

l4 = document.getElementById("quarto")
l4.onclick = mudarCor4;

l5 = document.getElementById("quinto")
l5.onclick = mudarCor5;

// FUCTION De Muda de Cor
function mudarCor(){
    this.style.backgroundColor= "red"
}
function mudarCor2(){
    this.style.backgroundColor= "blue"
}
function mudarCor3(){
    this.style.backgroundColor= "yellow"
}
function mudarCor4(){
    this.style.backgroundColor= "green"
}
function mudarCor5(){
    this.style.backgroundColor= "purple"
}