function carregarIndex() {
	onresize();
	produtoGet();
	servicoSiteGet();
	destaqueSiteGet();
}

function carregarDestaque() {
	destaqueConsoleGet();
}

function carregarServicos() {
	servicoGet();
}

function carregarProdutos() {
	produtoGet();
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
	return (sessionStorage.token === undefined)  ? "" : sessionStorage.token;
}

function fecharModal() {
	document.getElementById("modal").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.body.style.overflow = 'auto';
}
	
function validarLogin() {
	if (document.getElementById("inputLogin").value === "" || document.getElementById("inputSenha").value === "" ){
		alert("Por favor, preencha os campos");
	}
	else logar();
}

function logar() {
	var requestLogin = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/console/usuarios/logar";
	requestLogin.open("POST", url, true);
	requestLogin.setRequestHeader("Content-type", "application/JSON");
	
	var login = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;

	var json = '{"login" : "'+login+'", "senha" : "'+senha+'"}';
	
	requestLogin.onload = function (e) {
		
		var obj = JSON.parse(requestLogin.responseText); 
		var responseStatus = requestLogin.status;

		switch (responseStatus) {
		case 401:
			alert("Usuário e senha incorretos");
			break;
		case 200:
			sessionStorage.setItem('token', obj.token);
		default:
			break;
		}
	}
	
	requestLogin.onerror = function (e) {
		console.error(requestLogin.statusText);
	};
	
	requestLogin.send(json);
}

function novoDestaque(){
	location.href= "destaque.html";
}

function novoServico(){
	location.href= "servico.html";
}

function novoProduto(){
	location.href= "produto.html";
}


function abrirALterarDestaque(data){
	var id = data.getAttribute("data-id");
}

function voltarDestaque() {
	location.href= "destaques.html";
}

function voltarProduto() {
	location.href= "produtos.html";
}

function voltarServico() {
	location.href= "servicos.html";
}

function sair() {
	location.href= "index.html";
}

function btnAlterarNone () {
	if(document.getElementById("btnAlterarDestaque").style.display === "none"){
		document.getElementById("btnNovoDestaque").style.display = "";
		document.getElementById("formulario").style.display = "none";
	}else
		document.getElementById("btnAlterarDestaque").style.display = "initial";
		document.getElementById("btnNovoDestaque").style.display = "initial";
		
}

function btnAlterarNoneServico () {
	if(document.getElementById("btnAlterarServico").style.display === "none"){
		document.getElementById("btnNovoServico").style.display = "";
		document.getElementById("formulario").style.display = "none";
	}else
		document.getElementById("btnAlterarServico").style.display = "initial";
		document.getElementById("btnNovoServico").style.display = "initial";
}

function btnAlterarNoneProduto () {
	if(document.getElementById("btnAlterarProduto").style.display === "none"){
		document.getElementById("btnNovoProduto").style.display = "";
		document.getElementById("formulario").style.display = "none";
	}else
		document.getElementById("btnAlterarProduto").style.display = "initial";
		document.getElementById("btnNovoProduto").style.display = "initial";
}