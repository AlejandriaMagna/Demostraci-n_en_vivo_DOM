document.addEventListener("DOMContentLoaded", function() {
  const caja = document.getElementById("miCaja");
  const botonAnimar = document.getElementById("animarBoton");
  let posicion = 10;
  let animacionActiva = false;
  let intervaloAnimacion;

  botonAnimar.addEventListener("click", function() {
    if (!animacionActiva) {
      animacionActiva = true;
      botonAnimar.textContent = "Detener Animación";
      intervaloAnimacion = setInterval(function() {
        posicion += 5; // Mueve la caja 5 píxeles a la derecha en cada intervalo
        caja.style.left = posicion + "px";

        // Detener la animación cuando llegue a un cierto punto
        if (posicion >= 300) {
          clearInterval(intervaloAnimacion);
          animacionActiva = false;
          botonAnimar.textContent = "Animar Caja";
          posicion = 10; // Reinicia la posición para la próxima animación
          caja.style.left = posicion + "px";
        }
      }, 50); // Intervalo de 50 milisegundos (20 fotogramas por segundo)
    } else {
      animacionActiva = false;
      botonAnimar.textContent = "Animar Caja";
      clearInterval(intervaloAnimacion); // Detiene el intervalo de la animación
      posicion = 10; // Reinicia la posición
      caja.style.left = posicion + "px";
    }
  });
});