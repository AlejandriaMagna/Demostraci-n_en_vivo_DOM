
document.addEventListener("DOMContentLoaded", function() {
  const boton = document.getElementById("miBoton");

  boton.addEventListener("click", function() {
    if (boton.textContent === "Texto Inicial") {
      boton.textContent = "Texto Cambiado!";
    } else {
      boton.textContent = "Texto Inicial";
    }
  });
})