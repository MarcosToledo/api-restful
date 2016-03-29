function produtoSiteGet() {
	var requestProduto = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/site/produtos";
	requestProduto.open("GET", url, true);
	requestProduto.withCredentials = false;
	
	requestProduto.onload = function (e) {
		var produtos = JSON.parse(requestProduto.responseText); 
		tagRepositorio = "";
		
		for(i in produtos.produto){
			tagRepositorio += '<div class="div-produto">'+
			'<img src="images/'+produtos.produto[i].imagem +'" alt="produto">'+
			'<div class="titulo-texto-produto"><p>'+produtos.produto[i].titulo+'</p></div>'+
			'<div class="texto-produto"><p>'+ produtos.produto[i].descricao +'</p></div>' +
			'</div>';
		}
		document.getElementById("produtoContainer").innerHTML = tagRepositorio;
	}
	requestProduto.onerror = function (e) {
		console.error(requestProduto.statusText);
	};
	requestProduto.send();
}

var proximaPagina;

function produtoGet(pag) {
 	proximaPagina = pag + 1;
 	max = 5;
 	listagem = "";
 	listagem = (pag * max) - max;
 	pag = "/" + listagem + "/" + max;
 	
 	var requestProduto = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos" + pag;
    requestProduto.open("GET", url, true);
    requestProduto.withCredentials = false;
    var tokenRecuperado = recuperarToken();
    requestProduto.setRequestHeader("Authorization", tokenRecuperado);

    requestProduto.onload = function(e) {
      var produtosBuscados = JSON.parse(requestProduto.responseText);
      var servicoRow = "";
      var produtos = {};
      produtos.produto = [];
      	
      if (produtosBuscados.produto instanceof Array) {
    	  produtos.produto = produtosBuscados.produto;
      } else {
    	  produtos.produto.push(produtosBuscados.produto); 
      }
      
      servicoRow += '<tr class="cabecalho"><th>Titulo</th><th>Nome</th><th>Descrição</th><th>Imagem</th></tr>';

      for (key in produtos.produto) {
    	
    	var titulo = produtos.produto[key].titulo;
        var nome = produtos.produto[key].nome;
        var descricao = produtos.produto[key].descricao;
        var imagem = produtos.produto[key].imagem;
        
        servicoRow += '<tr class="linha">' +
        '<td class="coluna" onclick="recuperaIdProduto(this); btnAlterarNoneProduto();" data-id='+ produtos.produto[key].id+ '>'+titulo+'</td>' +
        '<td class="coluna" onclick="recuperaIdProduto(this); btnAlterarNoneProduto();" data-id='+ produtos.produto[key].id+ '>'+nome+'</td>' +
        '<td class="coluna" onclick="recuperaIdProduto(this); btnAlterarNoneProduto()" data-id='+ produtos.produto[key].id+ '>'+ descricao+ '</td>'+
        '<td class="coluna" onclick="recuperaIdProduto(this); btnAlterarNoneProduto()" data-id='+ produtos.produto[key].id + '>' + imagem + '</td>' +
        '</tr>';
      }
      document.getElementById("table").innerHTML = servicoRow;
      produtoGetBotoesPaginacao();
    }
    requestProduto.onerror = function(e) {
      console.error(requestProduto.statusText);
    };

    requestProduto.send();
}

function produtoGetBotoesPaginacao() {
	var requestProduto = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/produtos";
	requestProduto.open("GET", url, true);
	requestProduto.withCredentials = false;
	var tokenRecuperado = recuperarToken();
	requestProduto.setRequestHeader("Authorization", tokenRecuperado);
	
	requestProduto.onload = function(e) {
		 var produtos = JSON.parse(requestProduto.responseText);
		 var i = 1;
		 componenteBotao = "";
		 numeroPaginas = produtos.produto.length / 5;
		 
		 if (numeroPaginas % 2 != 0) {
			 (numeroPaginas +=  1);
		} else {
			 numeroPaginas;
		}
		 paginaAnterior = parseFloat(proximaPagina) - parseFloat(2);
		 componenteBotao += '<button type="button" id="btnBack" class="btn-paginacao" onclick="produtoGet('+paginaAnterior+')" > < </button>'
		for (i ; i < numeroPaginas; i++) {
			componenteBotao += '<button type="button" id="btnPaginacao'+i+'" class="btn-paginacao" onclick="produtoGet('+ i +')"; page = '+i+'; >' + i + '</button>';
		}
		componenteBotao += '<button type="button" id="btnProximo" class="btn-paginacao" onclick="produtoGet('+proximaPagina+')" > > </button>';
		
		document.getElementById("containerPaginacao").innerHTML = componenteBotao;

		if (proximaPagina >= i) {
			document.getElementById("btnProximo").disabled = true;
			document.getElementById("btnProximo").style.opacity = 0.5;
		}
		
		if (proximaPagina == 2) {
			document.getElementById("btnBack").disabled = true;
			document.getElementById("btnBack").style.opacity = 0.5;
		}
		
	}
	requestProduto.onerror = function(e) {
		console.error(requestProduto.statusText);
	};
	
	requestProduto.send();
}

function recuperaIdProduto(data) {
    var id = data.getAttribute("data-id");
	var req = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos/"+ id;
    req.open("GET", url, true);
    req.withCredentials = false;

    var tokenRecuperado = recuperarToken();
    req.setRequestHeader("Authorization", tokenRecuperado);

    req.onload = function(e) {
      var produtos = JSON.parse(req.responseText);

      var titulo = produtos.titulo;
      var nome = produtos.nome;
      var descricao = produtos.descricao;
      var imagem = produtos.imagem;
      var id = produtos.id;

      document.getElementById("inputTitulo").value = titulo;
      document.getElementById("inputNome").value = nome;
      document.getElementById("inputDescricao").value = descricao;
      document.getElementById("inputImagem").value = imagem;
      document.getElementById("btnAlterarProduto").setAttribute("data-id",id);
    }

    req.onerror = function(e) {
      console.error(req.statusText);
    };

    req.send();
 }

function alterarProduto(data) {
    var id = data.getAttribute("data-id");
    location.href= "produto.html?id="+id;
}

function produtoPost() {
 var post = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos";
    post.open("POST", url, true);
    post.setRequestHeader("Content-type", "application/JSON");

    var tokenRecuperado = recuperarToken();
    post.setRequestHeader("Authorization", tokenRecuperado);

    var titulo = document.getElementById("inputTitulo").value;
    var nome = document.getElementById("inputNome").value;
    var imagem = document.getElementById("inputImagem").value;
    var descricao = document.getElementById("inputDescricao").value;

    var json = '{"dataCadastro":"'+new Date+'", "titulo" : "'+titulo+'", "descricao" : "'+descricao+'", "nome": "'+nome+'","imagem" :"'+imagem+'", "status":"1"}';

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

function produtoPut() {
	var put = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos/" + getId();
    put.open("PUT", url, true);
    put.setRequestHeader("Content-type", "application/JSON");

    var tokenRecuperado = recuperarToken();
    put.setRequestHeader("Authorization", tokenRecuperado);

    var titulo = document.getElementById("inputTitulo").value;
    var nome = document.getElementById("inputNome").value;
    var descricao = document.getElementById("inputDescricao").value;
    var imagem = document.getElementById("inputImagem").value;

    var json = '{"dataCadastro":"'+new Date+'", "titulo" : "'+titulo+'", "descricao" : "'+descricao+'", "nome": "'+nome+'", "imagem" :"'+imagem+'", "status":"1"}';

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

function produtoDelete() {
	var del = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos/" + getId();
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

function mostrarAlterarProduto(id) {
    var idProduto = id;
    var requestProduto = new XMLHttpRequest();
    var url = "http://localhost:8080/api-restful/api/console/produtos/"+idProduto;
    requestProduto.open("GET", url, true);
    requestProduto.withCredentials = false;

    var tokenRecuperado = recuperarToken();
    requestProduto.setRequestHeader("Authorization", tokenRecuperado);

    requestProduto.onload = function(e) {
      var produtos = JSON.parse(requestProduto.responseText);

      var titulo = produtos.titulo;
      var nome = produtos.nome;	
      var descricao = produtos.descricao;
      var imagem = produtos.imagem;

      document.getElementById("inputTitulo").value = titulo;
      document.getElementById("inputNome").value = nome;
      document.getElementById("inputDescricao").value = descricao;
      document.getElementById("inputImagem").value = imagem;
    }
    
    requestProduto.onerror = function(e) {
        console.error(requestProduto.statusText);
      };
   
      requestProduto.send();
}

function inserirALterarProduto() {
	if (getId() == undefined) {
		produtoPost();
		location.href= "produtos.html";
	}
	produtoPut();
	location.href= "produtos.html";
}

function removerProduto() {
	produtoDelete();
	location.href = "produtos.html";
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

if(getPage() === "produto" && typeof getId() != "undefined"){
	mostrarAlterarProduto(getId());
}else{
	console.log("Página de Cadastrar");
}