const typed = new Typed('.typed', {    
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
	startDelay: 2000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 6000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

setTimeout(function () {
	$('#msj-principal').fadeOut('fast');
}, 6000); // <-- time in milliseconds

$("#msj-principal-2").hide();
$("#msj-principal-2").delay(6000).show(600);

$("#msj-principal-3").hide();
$("#msj-principal-3").delay(7000).show(300);

$("#msj-principal").hide();
$("#msj-principal").delay(2000).show(0);

$("#img-perfil").hide();
$("#img-perfil").delay(1000).show(600);

$("#cdro-biografia").hide();
$("#cdro-biografia").delay(8000).show(600);

$("#info-proyectos").hide();
$("#info-proyectos").delay(9000).show(600);

$("#sec-pie").hide();
$("#sec-pie").delay(9000).show(600);

