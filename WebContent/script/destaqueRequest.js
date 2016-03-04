function destaqueSiteGet() {
	var requestDestaque = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/site/destaques";
	requestDestaque.open("GET", url, true);
	requestDestaque.withCredentials = false;

	requestDestaque.onload = function(e) {
		var dados = JSON.parse(requestDestaque.responseText);

		var titulo = dados.destaque.titulo;
		var descricao = dados.destaque.descricao;
		var imagem = dados.destaque.imagem;

		document.getElementById("tituloDestaque").innerHTML = titulo;
		document.getElementById("textoDestaque").innerHTML = descricao;
		document.getElementById("banner").src = "images/" + imagem;
	}

	requestDestaque.onerror = function(e) {
		console.error(requestDestaque.statusText);
	};

	requestDestaque.send();
}

function destaqueConsoleGet() {
	var requestDestaque = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/destaques";
	requestDestaque.open("GET", url, true);
	requestDestaque.withCredentials = false;
	var tokenRecuperado = recuperarToken();
	requestDestaque.setRequestHeader("Authorization", tokenRecuperado);

	requestDestaque.onload = function(e) {
		var destaques = JSON.parse(requestDestaque.responseText);
		var destaqueRow = "";

		destaqueRow += '<tr class="cabecalho"><th>Titulo</th><th>Descrição</th><th>Imagem</th></tr>';

		for (key in destaques.destaque) {

			var titulo = destaques.destaque[key].titulo;
			var descricao = destaques.destaque[key].descricao;
			var imagem = destaques.destaque[key].imagem;

			destaqueRow += '<tr class="linha">'
					+ '<td class="coluna" onclick="recuperaIdDestaque(this)" data-id='
					+ destaques.destaque[key].id
					+ '>'
					+ titulo
					+ '</td>'
					+ '<td class="coluna" onclick="recuperaIdDestaque(this)" data-id='
					+ destaques.destaque[key].id
					+ '>'
					+ descricao
					+ '</td>'
					+ '<td class="coluna" onclick="recuperaIdDestaque(this)" data-id='
					+ destaques.destaque[key].id + '>' + imagem + '</td></tr>';
		}
		document.getElementById("table").innerHTML = destaqueRow;
	}
	requestDestaque.onerror = function(e) {
		console.error(requestDestaque.statusText);
	};

	requestDestaque.send();
}

function recuperaIdDestaque(data) {
	var idDestaque = data.getAttribute("data-id");
	var requestDestaque = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/destaques/"+ idDestaque;
	requestDestaque.open("GET", url, true);
	requestDestaque.withCredentials = false;

	var tokenRecuperado = recuperarToken();
	requestDestaque.setRequestHeader("Authorization", tokenRecuperado);

	requestDestaque.onload = function(e) {
		var destaques = JSON.parse(requestDestaque.responseText);

		var titulo = destaques.titulo;
		var descricao = destaques.descricao;
		var imagem = destaques.imagem;
		var id = destaques.id;

		document.getElementById("inputTitulo").value = titulo;
		document.getElementById("inputDescricao").value = descricao;
		document.getElementById("inputImagem").value = imagem;
		document.getElementById("btnAlterarDestaque").setAttribute("data-id",
				id);
	}

	requestDestaque.onerror = function(e) {
		console.error(requestDestaque.statusText);
	};

	requestDestaque.send();
}

function mostrarAlterar(id) {
	var idDestaque = id;
	var requestDestaque = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/destaques/"+ idDestaque;
	requestDestaque.open("GET", url, true);
	requestDestaque.withCredentials = false;

	var tokenRecuperado = recuperarToken();
	requestDestaque.setRequestHeader("Authorization", tokenRecuperado);

	requestDestaque.onload = function(e) {
		var destaques = JSON.parse(requestDestaque.responseText);

		var titulo = destaques.titulo;
		var descricao = destaques.descricao;
		var imagem = destaques.imagem;

		document.getElementById("inputTitulo").value = titulo;
		document.getElementById("inputDescricao").value = descricao;
		document.getElementById("inputImagem").value = imagem;
	}

	requestDestaque.onerror = function(e) {
		console.error(requestDestaque.statusText);
	};

	requestDestaque.send();
}

function alterarDestaque(data) {
	var id = data.getAttribute("data-id");
	location.href= "destaque.html?id="+id;
}

function destaquePost() {
	var requestLogin = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/destaques";
	requestLogin.open("POST", url, true);
	requestLogin.setRequestHeader("Content-type", "application/JSON");

	var tokenRecuperado = recuperarToken();
	requestDestaque.setRequestHeader("Authorization", tokenRecuperado);
	
	var titulo = document.getElementById("inputTitulo").value;
	var descricao = document.getElementById("inputDescricao").value;
	var imagem = document.getElementById("inputImagem").value;

	var json = '{"titulo" : "'+titulo+'", "dataCadastro":"'+new Date+'", "descricao" : "'+descricao+'", "imagem" :"'+imagem+'", "status":"1"}';
	
	requestLogin.onload = function (e) {
		
		var obj = JSON.parse(requestLogin.responseText); 
		var responseStatus = requestLogin.status;
		console.log(responseStatus);

	}
	
	requestLogin.onerror = function (e) {
		console.error(requestLogin.statusText);
	};
	
	requestLogin.send(json);
}

function destaquePut() {
}

function destaqueDelete() {
}

function getId(){
	var aux = location.href;
	aux = aux.split("/");
	url = aux[5].split("=");
	return url[1];
}

function getPage(){
	var aux = location.href;
	aux = aux.split("/");
	url = aux[5].split(".");
	return url[0];
}

if(getPage() === "destaque" && typeof getId() != "undefined"){
	mostrarAlterar(getId());
}else{
	console.log("Página de Cadastrar");
}