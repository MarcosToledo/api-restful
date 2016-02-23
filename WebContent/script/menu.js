var i = 0;

function menu() {

  var elemento = document.getElementById('nav');

  if(i % 2 == 0) {
    elemento.style.display = "block";
    i++;
  }else {
    elemento.style.display = "none";
    i++;
  }

}