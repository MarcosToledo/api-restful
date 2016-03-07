	function servicoGet() {
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

	function servicoPost() {
	}

	function servicoPut() {
	}

	function servicoDelete() {
	}
