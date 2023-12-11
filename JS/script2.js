function blurFunction(){
    document.getElementById("myInput").style.background = "hotpink";
}


function myFunction(val){
    alert("mudou para " + val);
}


function loadFunction(){
    alert("Página carregada!!!")
}

function mouseDown(){
    document.getElementById("myP").style.color = "hotpink";
}

function mouseUp(){
    document.getElementById("myP").style.color = "red";
}


//coordenadas
function coordenadasFigura(event){
    var x = event.clientX;
    var y = event.clientY;
    var coordenada = "Coordenadas: (" + x + ", " + y + ")";
    document.getElementById("demo3").innerHTML = coordenada;
}


function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}


//preencher form
function submitFunction(cmp1, cmp2){
    if(cmp1.value == null || cmp1.value == ""){
    alert("Preencha o campo 1");
} else if (cmp2.value == null || cmp2.value == ""){
    alert("Preencher o campo 2")
} else{("Obrigada!!")
    }
   
}  

function resetFunction(){
    alert("Os dados seram limpos")
}

window.onbeforeunload = function(){
    return 'Tchau';
}