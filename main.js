/* var nome = "Fábio"
var idade = 18
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert ("Bem vindo " + nome + ", de idade " + idade);;
//alert (idade*3);
console.log(nome.toUpperCase());
console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil")); */

// Exemplo de array
//var lista = ["maçã","Banana","Uva"];
//console.log(lista[1]+lista[2]);
//lista.push("abacaxi"); //adiciona um elemento a lista
//lista.pop(); //remove o último elemento da lista
//console.log(lista.length); // exibe o tamanho da lista no console, poderia também ser no alert
//console.log(lista.reverse()); // vai dispor os elementos na ordem reversa da que eles estão dispostos
//console.log(lista.toString); // faz ser exibindo como texto comum entre aspas e não como lista
//console.log(lista.join(" - ")); // o que está dentro da join vai ser o separador dos elementos da exibição
//console.log(lista);

//exemplos de dicionário

/* var fruta = {nome: "uva" , cor: "roxa"};
console.log(fruta);
console.log(fruta.nome);
alert (fruta.cor); */

/* var fruta = [{nome: "uva" , cor: "roxa"},{nome: "abacaxi", cor:"amarelo"}];
console.log(fruta[1].nome);
alert(fruta[0].nome +" "+ fruta[1].cor); */

//exemplos de condicional
/* var idade = prompt("qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade")
}else{
    alert("Menor de idade")
} */


// laços de repetição while 
/* var count = 0;
while(count <= 5) {
    console.log(count);
    count = count + 1;
} */

//estrutura de repetição for
/* var count;
for (count=0; count <=5; count++) { //declara que count = 0, enquanto count for <=5 execute count + 1
     alert(count)
}
*/
/*
var d = new Date();
alert(d); */
/*
//Função
function nomedafuncao(a,b){
return a*b;
}
alert(nomedafuncao(5,10));
*/
/*

function setReplace(frase,sai,entra){
   return frase.replace(sai,entra);
}
alert(setReplace("eu comi bolo de abacaxi","abacaxi","banana"));


function validaidade(idade){
    var validar;
    if (idade>=18){
        validar=true
    } else {
        validar=false
    } return validar
} 
   var idade = prompt("Qual sua idade?");
   console.log(validaidade(idade)); 
   */

/*
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("obrigado por clicar");
}
*/
/* function redirecionar(){
    //window.open("https://www.youtube.com/watch?v=uMCSdgkdOJc"); > abre em outra janela
    window.location.href="https://www.youtube.com/watch?v=uMCSdgkdOJc"; > abre na mesma janela
}
*/
/*
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "obrigado por passar o mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
} 
*/

function change(elemento){
    console.log(elemento.value)

}