function carregarIndex() {
	onresize();
	produtoGet();
	servicoSiteGet();
}

function carregarDestaque() {
	destaqueConsoleGet();
}

function carregarServicos() {
	servicoGet();
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
			location.href= "console/destaques.html";
			break;
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


function abrirALterarDestaque(data){
	var id = data.getAttribute("data-id");
}

function voltarDestaque() {
	location.href= "destaques.html";
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
	}else
		document.getElementById("btnAlterarDestaque").style.display = "initial";
		document.getElementById("btnNovoDestaque").style.display = "initial";
}

function btnAlterarNoneServico () {
	if(document.getElementById("btnAlterarServico").style.display === "none"){
		document.getElementById("btnNovoDestaque").style.display = "";
	}else
		document.getElementById("btnAlterarServico").style.display = "initial";
		document.getElementById("btnNovoDestaque").style.display = "initial";
}

