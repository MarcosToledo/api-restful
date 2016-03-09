function servicoSiteGet() {
	var requestServico = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/site/servicos";
	requestServico.open("GET", url, true);
	requestServico.withCredentials = false;
	
	requestServico.onload = function (e) {
		var servicos = JSON.parse(requestServico.responseText); 
		tagRepositorio = "";
		
		for(i in servicos.servico){
			tagRepositorio += '<div class="div-servico	">' +
			'<div class="img-container">'+
			'<img src="images/'+servicos.servico[i].imagem +'" alt="servico">'+
			'</div>' +
			'<div class="texto-container">' +	
			'<div class="div-titulo-texto-servico">'+
			'<div class="div-titulo-texto-servico"><p>'+servicos.servico[i].nome+'</p></div>'+
			'</div>'+
			'<div class="div-texto-servico"><p>'+ servicos.servico[i].descricao +'</p>' +
			'</div>'+
			'</div>'+
			'</div>';
		}
		document.getElementById("servicosContainer").innerHTML = tagRepositorio;
	}
	
	requestServico.onerror = function (e) {
		console.error(requestServico.statusText);
	};
	
	requestServico.send();
}

function servicoGet() {
 var requestServico = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/servicos";
    requestServico.open("GET", url, true);
    requestServico.withCredentials = false;
    var tokenRecuperado = recuperarToken();
    requestServico.setRequestHeader("Authorization", tokenRecuperado);

    requestServico.onload = function(e) {
      var servicos = JSON.parse(requestServico.responseText);
      var servicoRow = "";

      servicoRow += '<tr class="cabecalho"><th>Titulo</th><th>Nome</th><th>Descrição</th><th>Imagem</th></tr>';

      for (key in servicos.servico) {
    	
    	var titulo = servicos.servico[key].titulo;
        var nome = servicos.servico[key].nome;
        var descricao = servicos.servico[key].descricao;
        var imagem = servicos.servico[key].imagem;

        servicoRow += '<tr class="linha">' +
        
        '<td class="coluna" onclick="recuperaIdServico(this); btnAlterarNoneServico();" data-id='+ servicos.servico[key].id+ '>'+titulo+'</td>' +
        '<td class="coluna" onclick="recuperaIdServico(this); btnAlterarNoneServico();" data-id='+ servicos.servico[key].id+ '>'+nome+'</td>' +
        '<td class="coluna" onclick="recuperaIdServico(this); btnAlterarNoneServico()" data-id='+ servicos.servico[key].id+ '>'+ descricao+ '</td>'+
        '<td class="coluna" onclick="recuperaIdServico(this); btnAlterarNoneServico()" data-id='+ servicos.servico[key].id + '>' + imagem + '</td>' +
        '</tr>';
      }
      document.getElementById("table").innerHTML = servicoRow;
    }
    requestServico.onerror = function(e) {
      console.error(requestServico.statusText);
    };

    requestServico.send();
}

function recuperaIdServico(data) {
    var idServico = data.getAttribute("data-id");
	    var requestServico = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/servicos/"+ idServico;
    requestServico.open("GET", url, true);
    requestServico.withCredentials = false;

    var tokenRecuperado = recuperarToken();
    requestServico.setRequestHeader("Authorization", tokenRecuperado);

    requestServico.onload = function(e) {
      var servicos = JSON.parse(requestServico.responseText);

      var titulo = servicos.titulo;
      var nome = servicos.nome;
      var descricao = servicos.descricao;
      var imagem = servicos.imagem;
      var id = servicos.id;

      document.getElementById("inputTitulo").value = titulo;
      document.getElementById("inputNome").value = nome;
      document.getElementById("inputDescricao").value = descricao;
      document.getElementById("inputImagem").value = imagem;
      document.getElementById("btnAlterarServico").setAttribute("data-id",id);
    }

    requestServico.onerror = function(e) {
      console.error(requestServico.statusText);
    };

    requestServico.send();
 }

function alterarServico(data) {
    var id = data.getAttribute("data-id");
    location.href= "servico.html?id="+id;
  }

function servicoPost() {
	 var post = new XMLHttpRequest();
	    var url = "http://localhost:8080/api-restful/api/console/destaques";
	    post.open("POST", url, true);
	    post.setRequestHeader("Content-type", "application/JSON");

	    var tokenRecuperado = recuperarToken();
	    post.setRequestHeader("Authorization", tokenRecuperado);

	    var titulo = document.getElementById("inputTitulo").value;
	    var descricao = document.getElementById("inputDescricao").value;
	    var imagem = document.getElementById("inputImagem").value;

	    var json = '{"titulo" : "'+titulo+'", "dataCadastro":"'+new Date+'", "descricao" : "'+descricao+'", "imagem" :"'+imagem+'", "status":"1"}';

	    post.onload = function (e) {

	      var obj = JSON.parse(post.responseText); 
	      var responseStatus = post.status;
	      console.log(responseStatus);

	    }

	    post.onerror = function (e) {
	      console.error(post.statusText);
	    };

	    post.send(json);
}

function servicoPut() {
	var put = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/destaques/" + getId();
    put.open("PUT", url, true);
    put.setRequestHeader("Content-type", "application/JSON");

    var tokenRecuperado = recuperarToken();
    put.setRequestHeader("Authorization", tokenRecuperado);

    var titulo = document.getElementById("inputTitulo").value;
    var descricao = document.getElementById("inputDescricao").value;
    var imagem = document.getElementById("inputImagem").value;

    var json = '{"titulo" : "'+titulo+'", "dataCadastro":"'+new Date+'", "descricao" : "'+descricao+'", "imagem" :"'+imagem+'", "status":"1"}';

    put.onload = function (e) {

      var obj = JSON.parse(put.responseText); 
      var responseStatus = put.status;
      console.log(responseStatus);

    }

    put.onerror = function (e) {
      console.error(put.statusText);
    };

    put.send(json);
}

function servicoDelete() {
	var del = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/servicos/" + getId();
    del.open("DELETE", url, true);
    del.setRequestHeader("Content-type", "application/JSON");

    var tokenRecuperado = recuperarToken();
    del.setRequestHeader("Authorization", tokenRecuperado);

    del.onload = function (e) {
      var responseStatus = del.status;
      console.log(responseStatus);
    }

    del.onerror = function (e) {
      console.error(del.statusText);
    };

    del.send();
}

function mostrarAlterarServico(id) {
    var idDestaque = id;
    var requestServico = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/servicos/"+ idDestaque;
    requestServico.open("GET", url, true);
    requestServico.withCredentials = false;

    var tokenRecuperado = recuperarToken();
    requestServico.setRequestHeader("Authorization", tokenRecuperado);

    requestServico.onload = function(e) {
      var servicos = JSON.parse(requestServico.responseText);

      var titulo = servicos.titulo;
      var nome = servicos.nome;	
      var descricao = servicos.descricao;
      var imagem = servicos.imagem;

      document.getElementById("inputTitulo").value = titulo;
      document.getElementById("inputNome").value = nome;
      document.getElementById("inputDescricao").value = descricao;
      document.getElementById("inputImagem").value = imagem;
    }
    
    requestServico.onerror = function(e) {
        console.error(requestServico.statusText);
     };
   
     requestServico.send();
}

function removerServico() {
	servicoDelete();
	location.href = "servicos.html";
}


function getId() {
	var aux = location.href;
	aux = aux.split("/");
	url = aux[5].split("=");
	return url[1];
}

function getPage() {
	var aux = location.href;
	aux = aux.split("/");
	url = aux[5].split(".");
	return url[0];
}

if(getPage() === "servico" && typeof getId() != "undefined"){
	mostrarAlterarServico(getId());
}else{
	console.log("Página de Cadastrar");
}

