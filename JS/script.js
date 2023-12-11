
var pessoas = ["Matheus" ,  "Pedro" , "Joaozinho", "Nelson"];
var objt = [ "Colher ", "Garfo"];
var frutas = ["Morango" , "Franboesa" , " Maçã"];
pessoas[0];// representa maria
pessoas.length; // resultado = 4 
objt[obj.length] = "Faca"; //add um elemento ao array
frutas.indexOf("Morango"); // resultado 0

document.write("<br> " + "Pessoas: " + pessoas + "<br>" + "Objetos: " + 
   objetos + "<br>" + "Frutas: " + frutas);
   
///EXEMPLO
/*
var animais = ["Macaco" , "Onça " , "Cavalo" , "Cachorro" , "Gato"];

animais.lenght;
*/
 
/*
var d = new Date("December 13, 1989 13:30:00");
document.getElementById("D1").innerHTML = d;

d = new Date(0);
document.getElementById("D2").innerHTML = d;


var d = new Date(99, 5, 24,11,33,30,0);
document.getElementById("D3").innerHTML = d;
// o mes vai de 0 (janeiro) a 11 (dezembro)

var d = new Date(2014,7,20);
document.getElementById("D4").innerHTML = d;

d = new Date();
document.getElementById("D5").innerHTML = d.toString();
d = new Date();
document.write("<br>" +  d.toUTCString());
document.write("<br>" +  d.toDateString());
document.write("<br>" +  d.toLocaleDateString());
document.write("<br>" +  d.toLocaleTimeString('pt-PT', {hour12: false}));
*/


/*
var hoje, prazo;

hoje = new Date();
prazo = new Date();


prazo.setFullYear(2023,10,28);
var dia = ["Domingo", "Segunda", "Terça" , "Quarta", "Quinta" , "Sexta" , "Sábado"];
document.write("<p> Hoje é "+ dia[hoje.getDay()] + "," + hoje.getDate() 
+ "/" + (hoje.getMonth()) + "/" + hoje.getFullYear() + "</p>");
document.write("<p> O prazo é: " + dia[prazo.getDay()] + ", " + prazo.getFullYear() + "</p>" )      

try{
      var x;
      if(x == "") throw "vazio";
      if (isNaN(x)) throw "não é um número";
      console.log(x);
      document.write(x);
} catch (err){
   console.log("Input is" + err);
   document.write("Input is " + err);
}
*/

/*
try {
   adddlert("ERRO!!!") //addd alert nao existe

} catch (err){
   document.write = err.message
}
*/

/*
var dividendo = 10;
var divisor = 0;

try{
   if (divisor = 0);{
   throw new
   Error("Erro: Divisao por zero não é permitida ") 
   }
   var resultado = dividendo/divisor;
   console.log ("resultado: ", resultado);
} catch (err){
   console.log(err.message);
}
*/

/*
function myFunction(){
   var message, x;
   message = document.getElementById("message");
   message.innerHTML = "";
   x = document.getElementById("demo").value;
   try {
      if (x == "") throw "empty";
      if (isNaN(x)) throw "não é um número";
      x = Number(x);
      if (x <5) throw "too low";
      if (x > 10) throw "too high";
   }
   catch(err){
      message.innerHTML = "Input is " + err;
   }
}
*/

try {
   adddlert("ERRO!!!") //addd alert nao existe

} catch (err){
   document.write("<br>" + err.message);
} finally {
   document.write("<br> Será mostrado mesmo com o erro");
}
