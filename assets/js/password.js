// Obtener referencias a los elementos del DOM
const digit1Select = document.getElementById('digit1');
const digit2Select = document.getElementById('digit2');
const digit3Select = document.getElementById('digit3');
const verifyButton = document.getElementById('verify-password');
const resultMessage = document.getElementById('password-result');

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
        resultMessage.textContent = 'Password 1 correcto';
        resultMessage.className = 'result-message success';
    } else if (password === '714') {
        resultMessage.textContent = 'Password 2 correcto';
        resultMessage.className = 'result-message success';
    } else {
        resultMessage.textContent = 'Password incorrecto';
        resultMessage.className = 'result-message error';
    }
}

// Agregar evento click al botón de verificación
verifyButton.addEventListener('click', verificarPassword);

// Verificar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Limpiar el mensaje de resultado al inicio
    resultMessage.textContent = '';
    resultMessage.className = 'result-message';
});