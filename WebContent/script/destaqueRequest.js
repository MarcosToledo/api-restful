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

        destaqueRow += '<tr class="linha">' +
        '<td class="coluna" onclick="recuperaIdDestaque(this); btnAlterarNone();" data-id='+ destaques.destaque[key].id+ '>'+titulo+'</td>' +
        '<td class="coluna" onclick="recuperaIdDestaque(this)" data-id='+ destaques.destaque[key].id+ '>'+ descricao+ '</td>'+
        '<td class="coluna" onclick="recuperaIdDestaque(this)" data-id='+ destaques.destaque[key].id + '>' + imagem + '</td>' +
        '</tr>';
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
      document.getElementById("btnAlterarDestaque").setAttribute("data-id", id);
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

  function destaquePut() {
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

  function destaqueDelete() {
	  var del = new XMLHttpRequest();
	    var url = "http://localhost:8080/api-restful/api/console/destaques/" + getId();
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

function inserirALterarDestaque() {
	if (getId() == undefined) {
		destaquePost();
		location.href= "destaques.html";
	}
	destaquePut();
	location.href= "destaques.html";
	
}
function removerDestaque() {
	destaqueDelete();
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
if(getPage() === "destaque" && typeof getId() != "undefined"){
	mostrarAlterar(getId());
}else{
	console.log("Página de Cadastrar");
}