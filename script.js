let h1 = document.getElementsByClassName("squad")
let butt = document.getElementById("press")
let butto = document.getElementById("pressi")


butt.addEventListener("click", confirmar)
butto.addEventListener("click", apagar)

var arybuton = [false,false,false,false,false]

function apagar(){
    let tes = document.querySelectorAll(['.squad'])
    tes = Array.from(tes)
    tes.forEach(function(item,index ,arr){
        item.removeAttribute("style")
        arybuton[index] = false
    })
}
function confirmar(){
    arybuton.forEach(function(item,index,arr){
        if(arybuton[0,2,4] == true && arybuton[1,3] == false){
            alert("Vitoria ,Parabens você conseguiu desvendar o Enigma ")
        }
    })
}

let senhatxt = document.getElementById("senha_mostrar") 
let senhabutton = document.getElementById("senha") // tentar pega o valor desse input
// talvez eu consiga se colocar na ativasao do button ok 
senhabutton.onchange = function(){
    senhatxt.innerText = senhabutton.value
} //se quiser muda o texto


l1 = document.getElementById("colorsquad0")
l1.onclick = mudarCor;

l2 = document.getElementById("colorsquad1")
l2.onclick = mudarCor2; // alem de onclick existem varios tipo onmouseover onmouseout

l3 = document.getElementById("colorsquad2")
l3.onclick = mudarCor3;

l4 = document.getElementById("colorsquad3")
l4.onclick = mudarCor4;

l5 = document.getElementById("colorsquad4")
l5.onclick = mudarCor5;

// FUCTION De Muda de Cor

function mudarCor(){
    this.style.backgroundColor= "red"
    arybuton[0] = true
}
function mudarCor2(){
    this.style.backgroundColor= "blue"
    arybuton[1] = true
}
function mudarCor3(){
    this.style.backgroundColor= "yellow"
    arybuton[2] = true
}
function mudarCor4(){
    this.style.backgroundColor= "green"
    arybuton[3] = true
}
function mudarCor5(){
    this.style.backgroundColor= "purple"
    arybuton[4] = true
}