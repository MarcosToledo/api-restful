var requestProduto = new XMLHttpRequest();
var url = "http://localhost:8080/api-restful/api/produtos";
requestProduto.open("GET", url, true);
requestProduto.setRequestHeader("Authorization", "marcos");
requestProduto.withCredentials = false;

requestProduto.onload = function (e) {
	var produtos = JSON.parse(requestProduto.responseText); 
	tagRepositorio = "";
	
	for(i in produtos.produto){
		tagRepositorio += '<div class="div-produto">'+
							'<img src="images/'+produtos.produto[i].imagem +'" alt="produto">'+
							'<div class="titulo-texto-produto"><p>'+produtos.produto[i].nome+'</p></div>'+
							'<div class="texto-produto"><p>'+ produtos.produto[i].descricao +'</p></div></div>';
	}
	document.getElementById("produtoContainer").innerHTML = tagRepositorio;
}
requestProduto.onerror = function (e) {
	console.error(requestProduto.statusText);
};

requestProduto.send();