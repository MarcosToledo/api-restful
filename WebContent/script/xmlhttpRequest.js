
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:8080/api-restful/api/produtos";
xmlhttp.open("GET", url, true);
xmlhttp.withCredentials = false;

xmlhttp.onload = function (e) {
	console.log('Status code: '+ xmlhttp.status);
	var dados = JSON.parse(xmlhttp.responseText);
	document.getElementById("elemento").innerHTML = dados.produto.descricao;
}

xmlhttp.onerror = function (e) {
	console.error(xmlhttp.statusText);
};

xmlhttp.send();