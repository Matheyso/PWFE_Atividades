/*
function myFunction(){
    alert('ola');
}

var myVar = setInterval(myTimer,1000);

function myTimer(){
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


var objeto = setInterval(obj, 1000);


function obj(){
    var a = new Date();
    var b = new Date();
    var c = new Date();
    document.getElementById("demo1").innerHTML = "Hora: " + a.getHours(); 
    document.getElementById("demo2").innerHTML = "Minutos: " + b.getMinutes();
    document.getElementById("demo3").innerHTML = "Segundos:" + c.getSeconds();
}


//exemplo do professor 
  
function mostrarHora(){
    let d = new Data();
    document.body.innerHTML = "Hora: " + d.getHours() + d.getMinutes() + d.getMinutes() + 
    d.toLocaleTimeString();
} 

mostrarHora();

function Hora(){
    const tempo = new Date();

    const hora = tempo.getHours();
    const minutos = tempo.getMinutes();
    const segundos = tempo.getSeconds();
    console.log(`${hora} :${minutos} :${segundos}`);
    document.body.innerHTML = `${hora} :${minutos} :${segundos}`;
    setInterval(Hora, 1000);
}
*/


function anuncio(){
    document.write("VENDE-SE INGRESSOS PARA O THE ERAS TOUR")
}

function anuncio2(){
    document.body.style.background = "url(./IMG/1.jpg)"
}

function anuncioreset(){
    document.body.style.background = ""
}
