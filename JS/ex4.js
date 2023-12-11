//var titulo = document.getElementById("titulo");
//var conteudo = titulo.textContent;
//console.log(conteudo)

/*
var x = document.getElementsByTagName("li")
document.getElementById("demo").innerHTML =
x[1].innerHTML
console.log("pegando " + x[1].innerHTML)
*/

/*
var elemento = document.getElementsByClassName("exemplo1")
elemento[0].innerHTML = "testando classe"
console.log("JS" + elemento[0].innerHTML)


var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero " + num);


var element = document.getElementById("cabecalho")
element.innerHTML="novo cabeçalho";
document.getElementById("imagem").src="IMG/1.jpg";



document.getElementById("p2").style.color="hotpink";
document.getElementById("p2").style.fontSize="22px"
document.getElementById("p2").style.border="22px"
document.getElementById("p2").style.borderBlockColor="red"



var txt = document.getElementById("intro").childNodes[0].textContent;
document.write(txt);
console.log(txt)

var x = document.getElementById("left");
var txt = "";
for (var i = 0; i < x.childNodes.length; i++){
    txt += "Nodo: " + x.childNodes[i].nodeName + "Valor: " + x.childNodes[i].nodeName + "<br>";
}
alert(txt);

var para = document.createElement("p");
var node = document.createTextNode("esse novo");    
para.appendChild(node)

var element = document.getElementById("left")
element.appendChild(para);

*/
var para = document.createElement("p");
var node = document.createTextNode("Esse é novo");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child) 

/*
alert('BUUUUUUUUUUUUUUUUUUUUUUUMMMMMMMMMMMMMMMMMMMMMMMMMM!!!');
if ( confirm ('alerta confirmado?'))
        alert ('positivo central ')
    else 
    alert('negativo central')
document.write(document.images.length)



/*

function funcao(){
    alert ("It's me!! Hii!")
}


function bemvindo(nome1, nome2){
    alert("Bemvindo " + nome1 + " e " + nome2)
}

function multi(a,b){
    opr = "multiplicacao";
    var res = a*b;
    return res;
}

*/
//document.getElementById("Resposta").innerHTML = multi(4,3);