// Obtener referencias a los elementos del DOM
const digit1Select = document.getElementById('digit1');
const digit2Select = document.getElementById('digit2');
const digit3Select = document.getElementById('digit3');
const verifyButton = document.getElementById('verify-password');

// Función para verificar el password
function verificarPassword() {
    // Obtener los valores seleccionados
    const digit1 = digit1Select.value;
    const digit2 = digit2Select.value;
    const digit3 = digit3Select.value;
    
    // Combinar los dígitos para formar el password
    const password = digit1 + digit2 + digit3;
    
    // Verificar si el password es correcto
    if (password === '911') {
        Swal.fire({
            title: '¡Correcto!',
            text: 'Password 1 correcto',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
        });
    } else if (password === '714') {
        Swal.fire({
            title: '¡Correcto!',
            text: 'Password 2 correcto',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
        });
    } else {
        Swal.fire({
            title: '¡Error!',
            text: 'Password incorrecto',
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo',
            confirmButtonColor: '#d33'
        });
    }
}

// Agregar evento click al botón de verificación
verifyButton.addEventListener('click', verificarPassword);

// Verificar al cargar la página (opcional)
document.addEventListener('DOMContentLoaded', function() {
    // No es necesario mostrar ningún mensaje al inicio
});