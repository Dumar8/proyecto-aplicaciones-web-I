// Manejador de evento para el envío del formulario de registro
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Recopilación de datos del formulario de registros
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const cedula = document.getElementById('cedula').value;
    const phone = document.getElementById('phone').value;
    const genero = document.getElementById('genero').value;
    const direccion = document.getElementById('direccion').value;
    const programa = document.getElementById('programa').value;
    const matricula = document.getElementById('matricula').value;
    const ajustes = document.getElementById('ajustes').value;
    const contactoEmergencia = document.getElementById('contacto_emergencia').value;
    const relacionContacto = document.getElementById('relacion_contacto').value;

    // Recopilación de tipos de discapacidad seleccionados
    const discapacidades = [];
    document.querySelectorAll('input[name="tipo_discapacidad"]:checked').forEach(function(checkbox) {
        discapacidades.push(checkbox.value);
    });

    // Redirigir al usuario a la página de inicio de sesión después de enviar el formulario
    window.location.href = "login.html";

    // Impresión de datos en la consola (para fines de prueba)
    console.log('Nombres:', nombre);
    console.log('Apellidos:', apellido);
    console.log('Fecha de nacimiento:', nacimiento);
    console.log('Número de cédula:', cedula);
    console.log('Número de teléfono:', phone);
    console.log('Género:', genero);
    console.log('Dirección Postal:', direccion);
    console.log('Programa de Estudio:', programa);
    console.log('Número de Matrícula:', matricula);
    console.log('Discapacidades:', discapacidades);
    console.log('Ajustes Especiales:', ajustes);
    console.log('Contacto de Emergencia:', contactoEmergencia);
    console.log('Relación con el Contacto de Emergencia:', relacionContacto);

    // Mostrar una alerta de éxito al usuario
    alert('¡Datos enviados con éxito!');
});

// Función para desplazar la página hacia arriba cuando se carga
window.onload = function() {
    window.scrollTo(0, 0);
}

// Manejador de evento para el botón de Limpiar en el formulario de registro
document.querySelector('button[type="reset"]').addEventListener('click', function(event) {
    // Mostrar un mensaje de confirmación
    const confirmacion = confirm('¿Estás seguro de limpiar el formulario?');
    if (!confirmacion) {
        event.preventDefault(); // Evitar la acción predeterminada si el usuario elige "Cancelar"
    } else {
        window.scrollTo(0, 0); // Desplazar la página hacia arriba si el usuario elige "Aceptar"
    }
});

// Manejador de evento para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener el valor del número de cédula ingresado por el usuario
    const cedula = document.getElementById('cedula').value;

    // Verificar si el número de cédula es válido (solo para fines de demostración)
    if (isValidCedula(cedula)) {
        // Mostrar mensaje de inicio de sesión correcto
        document.getElementById('mensaje').innerText = '¡Inicio de sesión exitoso!';
    } else {
        // Mostrar mensaje de error si la cédula no es válida
        document.getElementById('mensaje').innerText = 'Número de cédula incorrecto. Inténtelo de nuevo.';
    }
});

// Función para verificar si el número de cédula es válido (solo para fines de demostración)
function isValidCedula(cedula) {
    // En este ejemplo, se considera válido cualquier número de cédula que tenga 10 dígitos
    return /^\d{10}$/.test(cedula);
}