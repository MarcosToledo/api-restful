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

function fecharModal() {
	document.getElementById("modal").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.body.style.overflow = 'auto';
}
	
function validarLogin() {
	if (document.getElementById("inputLogin").value == "" || document.getElementById("inputSenha").value == "" ){
		alert("Por favor, preencha os campos");
	}
	else logar();
}

function logar() {
	var requestLogin = new XMLHttpRequest();
	var url = "http://localhost:8080/api-restful/api/usuarios/logar";
	requestLogin.open("POST", url, true);
	requestLogin.setRequestHeader("Content-type", "application/JSON");
	
	var login = document.getElementById("inputLogin").value;
	var senha = document.getElementById("inputSenha").value;

	var json = '{"login" : "'+login+'", "senha" : "'+senha+'"}';
	
	
	requestLogin.onload = function (e) {
		console.log(requestLogin.statusText);
		key = requestLogin.status;
		
		switch (key) {
		case 401:
			alert("Usuário e senha incorretos");
			break;
		case 200:
			alert("Direcionando para outra tela")
			break
		default:
			break;
		}
	}
	
	requestLogin.onerror = function (e) {
		console.error(requestLogin.statusText);
	};

	requestLogin.send(json);
}