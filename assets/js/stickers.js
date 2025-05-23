// Obtener referencias a los elementos del DOM
const sticker1Input = document.getElementById('sticker1');
const sticker2Input = document.getElementById('sticker2');
const sticker3Input = document.getElementById('sticker3');
const verifyButton = document.getElementById('verify-stickers');

// Función para verificar la cantidad de stickers seleccionados
function verificarStickers() {
    // Obtener los valores de los inputs y convertirlos a números
    const sticker1Count = parseInt(sticker1Input.value) || 0;
    const sticker2Count = parseInt(sticker2Input.value) || 0;
    const sticker3Count = parseInt(sticker3Input.value) || 0;
    
    // Calcular el total de stickers
    const totalStickers = sticker1Count + sticker2Count + sticker3Count;
    
    // Verificar si el total está dentro del límite (10)
    if (totalStickers <= 10) {
        // Mostrar SweetAlert2 con mensaje de éxito que se cierra automáticamente después de 2 segundos
        Swal.fire({
            title: '¡Perfecto!',
            text: `Llevas ${totalStickers} stickers`,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50',
            timer: 1000,  // 1000 milisegundos = 1 segundo
            timerProgressBar: true,  // Muestra una barra de progreso
            showConfirmButton: false  // Oculta el botón de confirmación
        });
    } else {
        // Mostrar SweetAlert2 con mensaje de error (se mantiene igual)
        Swal.fire({
            title: '¡Atención!',
            text: 'Llevas demasiados stickers',
            icon: 'error',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#d33'
        });
    }
}

// Agregar evento click al botón de verificación
verifyButton.addEventListener('click', verificarStickers);

// Validación de inputs para evitar números negativos
[sticker1Input, sticker2Input, sticker3Input].forEach(input => {
    input.addEventListener('input', function() {
        // Si el valor es negativo, establecerlo a 0
        if (this.value < 0) {
            this.value = 0;
        }
        
        // Si el valor está vacío, establecerlo a 0
        if (this.value === '') {
            this.value = 0;
        }
    });
});

// Verificar automáticamente cuando cambia cualquier input
[sticker1Input, sticker2Input, sticker3Input].forEach(input => {
    input.addEventListener('change', verificarStickers);
});

// Verificar al cargar la página
document.addEventListener('DOMContentLoaded', verificarStickers);