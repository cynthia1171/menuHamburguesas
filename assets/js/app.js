var menu = document.getElementById('menu');
var cont = document.getElementById('contenido');

menu.addEventListener('click', function(){
	cont.classList.toggle('contenido');
});