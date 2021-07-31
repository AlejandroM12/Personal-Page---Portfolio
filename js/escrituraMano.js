const typed = new Typed('.typed', {
    strings: [
      
      '<i class="parrafosjs"> "Tecnico Superior en Desarrollo de Software"</i>',
      '<i class="parrafosjs"> Me gusta trabajar en equipo y afrontar nuevos desafios.</i>',
      '<i class="parrafosjs"> Me gusta mejorarme cada día.</i>',	
      '<i class="parrafosjs"> Gracias por visitar mi página </i>',
      '<i class="parrafosjs"> ¿Te interesa saber más sobre mí? <a href="sobremi.html"> <div class="flecha"> <i class="fas fa-angle-double-right iconoAbajo"></i></div> </a></i>',
    ],
  
    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
  });