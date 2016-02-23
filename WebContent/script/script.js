function onresize() {
	var windowWidth = screen.width;
	var device = 'mobile';

	if (windowWidth > 800) {
		device = 'desktop';
	}

	alterarImagens(device);

	console.log(windowWidth);	
	console.log(device);
}

function alterarImagens(device) {
	var logo = document.getElementById("logo");
	var banner = document.getElementById("banner");
	logo.setAttribute('src', 'images/' + device + '/logo.png');
	banner.setAttribute('src', 'images/' + device + '/banner.jpg');
}

window.addEventListener("resize", onresize);

