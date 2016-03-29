function EL(id) { 
	return document.getElementById(id); 
} 

function readFile() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();
    FR.onload = function(e) {
      EL("img").src = e.target.result;
      console.log(EL("img").src = e.target.result);
      EL("b64").innerHTML = e.target.result;
    };       
    FR.readAsDataURL( this.files[0] );
  }
}

EL("input").addEventListener("change", readFile, false);

function carregarIndex() {
	onresize();
	produtoSiteGet();
	servicoSiteGet();
	destaqueSiteGet();
	organizarMenu();
}

function carregarDestaque() {
	destaqueConsoleGet();
	organizarMenu();
	document.getElementById("formulario").style.display = "none";
}

function carregarServicos() {
	servicoGet(1);
	servicoGetBotoesPaginacao();
	organizarMenu();
	document.getElementById("formulario").style.display = "none";
}

function carregarProdutos() {
	produtoGet(1);
	organizarMenu();
	produtoGetBotoesPaginacao();
	document.getElementById("formulario").style.display = "none";
}

function carregarDestaqueAlterar() {
	alterarDestaque(data);
}

function onresize() {
	var windowWidth = screen.width;
	var device = 'mobile';

	if (windowWidth > 800) {
		device = 'desktop';
	}
	alterarImagens(device);
}

function alterarImagens(device) {
	var logo = document.getElementById("logo");
	var banner = document.getElementById("banner");
	logo.setAttribute('src', 'images/' + device + '/logo.png');
	banner.setAttribute('src', 'images/' + device + '/banner.jpg');
}

window.addEventListener("resize", onresize);

function abrirModal() {
	document.getElementById("modal").style.display = "block";
	document.getElementById("login").style.display = "block";
	document.body.style.overflow = 'hidden';
}

function recuperarToken() {
	return (sessionStorage.token === undefined) ? "" : sessionStorage.token;
}

function fecharModal() {
	document.getElementById("modal").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.body.style.overflow = 'auto';
}

function validarLogin() {
	if (document.getElementById("inputLogin").value === ""
			|| document.getElementById("inputSenha").value === "") {
		alert("Por favor, preencha os campos");
	} else {
		logar();

	}
}

function validarFormularioDestaque() {
	if (document.getElementById("inputTitulo").value === ""
			|| document.getElementById("inputDescricao").value === ""
			|| document.getElementById("inputImagem").value === "") {
		alert("Por favor, preencha os campos");
	} else {
		inserirALterarDestaque();
	}
}

function validarFormularioConsole() {
	if (document.getElementById("inputTitulo").value === ""
			|| document.getElementById("inputDescricao").value === ""
			|| document.getElementById("inputImagem").value === ""
			|| document.getElementById("inputNome").value === "") {
		alert("Por favor, preencha os campos");
		return false;
	} else {
		return true;
	}

}

function validarServicos() {
	if (validarFormularioConsole()) {
		inserirAlterarServico();
	} else {
		return false;
	}
}

function validarProdutos() {
	if (validarFormularioConsole()) {
		inserirALterarProduto();
	} else {
		return false;
	}
}

function validarCaracteresDestaques() {
	if (document.getElementById("inputTitulo").value > 33) {
		alert("Tamanho do campo 'titulo' é maior do que o permitido");
	}
	return false;

	if (document.getElementById("inputDescricao").value > 245) {
		alert("Tamanho do campo 'Descrição é maior do que o permitido'")
	}
	return false;

	if (document.getElementById("inputImagem").value < 4) {
		alert("Tamanho do campo 'Imagem' é menor do que o permitido")
	}

}

function logar() {
	var requestLogin = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/usuarios/logar";
	requestLogin.open("POST", url, true);
	requestLogin.setRequestHeader("Content-type", "application/JSON");

	var login = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;

	var json = '{"login" : "' + login + '", "senha" : "' + senha + '"}';

	requestLogin.onload = function(e) {

		var obj = JSON.parse(requestLogin.responseText);
		var responseStatus = requestLogin.status;

		switch (responseStatus) {
		case 401:
			alert("Usuário e senha incorretos");
			break;
		case 200:
			console.log(responseStatus);
			sessionStorage.setItem('token', obj.token);
			location.href = "console/destaques.html";
		default:
			break;
		}
	}

	requestLogin.onerror = function(e) {
		console.error(requestLogin.statusText);
	};

	requestLogin.send(json);
}

function novoDestaque() {
	location.href = "destaque.html";
}

function novoServico() {
	location.href = "servico.html";
}

function novoProduto() {
	location.href = "produto.html";
}

function abrirALterarDestaque(data) {
	var id = data.getAttribute("data-id");
}

function voltarDestaque() {
	location.href = "destaques.html";
}

function voltarProduto() {
	location.href = "produtos.html";
}

function voltarServico() {
	location.href = "servicos.html";
}

function sair() {
	sessionStorage.removeItem('token');
	location.href = "index.html";
}

function btnAlterarNone() {
	if (document.getElementById("btnAlterarDestaque").style.display === "none") {
		document.getElementById("btnNovoDestaque").style.display = "";
	} else
		document.getElementById("btnAlterarDestaque").style.display = "initial";
	document.getElementById("btnNovoDestaque").style.display = "initial";
	document.getElementById("formulario").style.display = "block";
}

function btnAlterarNoneServico() {
	if (document.getElementById("btnAlterarServico").style.display === "none") {
		document.getElementById("btnNovoServico").style.display = "";
	} else
		document.getElementById("btnAlterarServico").style.display = "initial";
	document.getElementById("btnNovoServico").style.display = "initial";
	document.getElementById("formulario").style.display = "block";
}

function btnAlterarNoneProduto() {
	if (document.getElementById("btnAlterarProduto").style.display === "none") {
		document.getElementById("btnNovoProduto").style.display = "";
	} else
		document.getElementById("btnAlterarProduto").style.display = "initial";
	document.getElementById("btnNovoProduto").style.display = "initial";
	document.getElementById("formulario").style.display = "block";
}

function organizarMenu() {
	if (recuperarToken() === "") {
		document.getElementById("LinkMenuHome").style.display = "block";
		document.getElementById("LinkMenuDestaque").style.display = "none";
		document.getElementById("LinkMenuServicos").style.display = "none";
		document.getElementById("LinkMenuProdutos").style.display = "none";
		document.getElementById("LinkMenuLogin").style.display = "block";
	} else {
		document.getElementById("LinkMenuHome").style.display = "none";
		document.getElementById("LinkMenuDestaque").style.display = "block";
		document.getElementById("LinkMenuServicos").style.display = "block";
		document.getElementById("LinkMenuProdutos").style.display = "block";
	}
}