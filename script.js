document.getElementById('formulario-contacto').addEventListener('submit', function(e) {
    e.preventDefault();  // Previene el comportamiento predeterminado de enviar el formulario.

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Validar los campos
    if (nombre && email && mensaje) {
        alert(`Gracias por tu mensaje, ${nombre}! Nos contactaremos contigo pronto.`);
        // Aquí podrías agregar la lógica para enviar el formulario o hacer algo más.
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
