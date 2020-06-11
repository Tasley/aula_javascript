

function clicado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://clubedolamen.com.br/") //abre em uma nova página
    //window.location.href = "https://clubedolamen.com.br/" //Aber na mesma página
}

function trocar(){
    document.getElementById("movimentomouse").innerHTML = "Obrigado por testar"
    //alert("trocar texto")
}

function voltar(){
    document.getElementById("movimentomouse").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

//function soma(n1,n2){
//    return n1+n2;
//}



//function validaidade(idade){
//    var validar
//    if (idade >= 18){
//        validar=true;
//    }else{
//        validar=false;
//    }
//    return validar
//}

//var idade = prompt("Qual sua idade? ")
//console.log(validaidade(idade))

//function setReplace(frase, nome, novo_nome){
//   return frase.replace(nome, novo_nome)
//}

//alert(soma(5, 10));

//alert (setReplace("Vai Japão", "Japão", "Brasil"));




//var d = new Date();
//alert(d.getMonth());


//var count;
//for(count=0; count <= 5; count++){
//    alert(count);
//}


//var count = 0;
//while (count <= 5){
//    console.log(count);
//    count = count + 1;
//}


//var idade = prompt("Qual sua idade?")

//if (idade >= 18) {
//    alert("Maior de Idade");
//} else{
//    alert("Menor de Idade")
//};


//var fruta = {nome:"Maçã", cor:"vermelha"};
//console.log(fruta.nome);

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva")
//lista.pop()
//console.log(lista)
//console.log(lista[1]);
//alert(lista[0]);
//console.log(lista.length)
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("-"));




//var nome= "Tasley Martins";
//var idade = 31;
//var idade2 = 30;
//var frase = "Japão é o melhor time do mundo."
//alert("Bem vindo ao primeiro site com Javascript do " + nome);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão","Brasil"));
//console.log(frase.toLocaleLowerCase());