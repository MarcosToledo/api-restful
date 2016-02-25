var requestDestaque = new XMLHttpRequest();
var url = "http://localhost:8080/api-restful/api/destaques";
requestDestaque.open("GET", url, true);
requestDestaque.setRequestHeader("Authorization", "marcos");
requestDestaque.withCredentials = false;

requestDestaque.onload = function (e) {
	var dados = JSON.parse(requestDestaque.responseText);
	document.getElementById("tituloDestaque").innerHTML = dados.destaque.titulo;
	document.getElementById("textoDestaque").innerHTML = dados.destaque.descricao;
	document.getElementById("banner").src = "images/" + dados.destaque.imagem; 
}

requestDestaque.onerror = function (e) {
	console.error(requestDestaque.statusText);
};

requestDestaque.send();