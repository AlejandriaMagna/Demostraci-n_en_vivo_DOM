document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('demoForm');
    
  
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
       
        const nombre = document.getElementById('nombre').value;
        
       
        alert(`¡Hola ${nombre}!`);
        
        
        form.reset();
    });

 
    const boton = document.getElementById('cambiarColor');
    
    // Añade un evento click al botón
    boton.addEventListener('click', () => {
        // Alterna el color de fondo entre lightblue y el color original
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === 'lightblue' 
            ? '#f0f0f0' 
            : 'lightblue'; 
    });

    
    
    const elementoDinamico = document.getElementById('elementoDinamico');
    
    // Evento cuando el mouse entra en el elemento
    elementoDinamico.addEventListener('mouseenter', () => {
        // Cambia el color de fondo y el texto
        elementoDinamico.style.backgroundColor = '#4a90e2';
        elementoDinamico.style.color = 'white';
    });

    // Evento cuando el mouse sale del elemento
    elementoDinamico.addEventListener('mouseleave', () => {
        // Restaura los colores originales
        elementoDinamico.style.backgroundColor = '#f5f5f5';
        elementoDinamico.style.color = 'black';
    });
});