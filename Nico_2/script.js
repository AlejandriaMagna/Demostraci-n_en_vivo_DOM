const input = document.getElementById('itemInput');
const list = document.getElementById('list');



document.getElementById('addBtn').addEventListener('click', function() {
    // Verifica si el campo de texto no está vacío (eliminando espacios en blanco)
    if (input.value.trim()) {
        // Crea un nuevo elemento de lista (li)
        let nuevoElemento = document.createElement('li');
        // Asigna el texto ingresado por el usuario al nuevo elemento
        nuevoElemento.innerText = input.value;
        // Agrega el nuevo elemento al final de la lista
        list.appendChild(nuevoElemento);
        // Limpia el campo de texto para permitir una nueva entrada
        input.value = '';
    }
});



document.getElementById('deleteBtn').addEventListener('click', function() {
    // Verifica si existe al menos un elemento en la lista
    if (list.lastChild) {
        // Elimina el último elemento de la lista
        list.removeChild(list.lastChild);
    }
});


input.addEventListener('keypress', function(e) {
    // Verifica si la tecla presionada es Enter
    if (e.key === 'Enter') {
        // Simula un clic en el botón de agregar
        document.getElementById('addBtn').click();
    }
});